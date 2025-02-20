interface MenuIten {
  id: string
  title: string
  route: string
}


export const MenuItens: MenuIten[] = [
  {
    id: "0",
    title: "HOME",
    route: "/"
  },
  {
    id: "1",
    title: "BLOG",
    route: "/blog"
  },
  {
    id: "2",
    title: "CONTACT ME",
    route: "/contact"
  },
]