"use server"
import type { NotionDatabaseResponse } from "@/types/notion"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

const notion = new Client({auth: process.env.NOTION_API_KEY})
const n2m = new NotionToMarkdown({notionClient: notion})

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    filter: {
      or: [
        {
          property: "published",
          checkbox: {equals: true}
        }
      ]
    }
  })

  const typedResponse = response as unknown as NotionDatabaseResponse

  const posts = await Promise.all(
    typedResponse.results.map( async (post) => {
      const pageId = post.id
      const title = post.properties.title.title[0]?.plain_text || "Sem título"
      const slug = post.properties.slug.rich_text[0]?.plain_text || ""
      const tags = post.properties.tags.multi_select.map((tag) => tag.name)
      const createdAt = post.created_time

      const summary = post.properties.summary.rich_text[0]?.plain_text || ""

      // const mdBlocks = await n2m.pageToMarkdown(pageId)
      // const fullMarkdown = mdBlocks.map((block) => block.parent).join("\n")
      // const [summary] = fullMarkdown.split("\n---\n")

      return{
        id: pageId,
        title,
        slug,
        tags,
        createdAt,
        summary
      }
    })
  )

  return posts
  // return typedResponse.results.map((post) => {
  //   return {
  //     id: post.id,
  //     title: post.properties.title.title[0].plain_text,
  //     slug: post.properties.slug.rich_text[0].plain_text,
  //     tags: post.properties.tags.multi_select.map((tag) => tag.name),
  //     createdAt: post.created_time
  //   }
  // })
}

export async function getPost(slug: string) {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: {
            equals: slug
          }
        }
      ]
    }
  })

  const pageId = response.results[0].id

  const n2m = new NotionToMarkdown({notionClient: notion})

  const mdBlocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdBlocks)

  // const fullMarkdown = mdBlocks.map(block => block.parent).join("\n")

  // const [summary, ...contentParts] = fullMarkdown.split("\n---\n")
  // const content = contentParts.join("\n")

  const typedResponse = response as unknown as NotionDatabaseResponse

  return {
    title: typedResponse.results[0].properties.title.title[0].plain_text,
    content: mdString.parent
    // summary: summary.trim(),
    // content: content.trim()
  }
}