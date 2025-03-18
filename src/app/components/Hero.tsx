"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  
  return ( 
    <section className="  w-full max-w-screen-xl mx-auto py-8 xs:py-16 ">
      	<div className="flex flex-col-reverse lg:flex-row gap-4 p-8">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold mb-6">O momento de relizar seus sonhos chegou</h1>
            <p>A conquista que você sempre desejou para você e sua família está mais perto do que nunca. Com o consórcio, você planeja seu futuro de forma inteligente, sem pagar juros abusivos e com total flexibilidade para alcançar seus objetivos.</p>
            <p>Seja para adquirir um imóvel, um veículo ou investir no que realmente importa, o consórcio oferece uma solução acessível e segura, permitindo que você realize seus planos com tranquilidade e organização financeira.</p>
            <p>Comece agora a transformar seus sonhos em realidade com a melhor alternativa para uma compra planejada.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/blog`}>
                <Button variant="default" className="cursor-pointer w-full">Blog</Button>
              </Link>
              <Button variant="outline" className="cursor-pointer">Blog</Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden min-w-xl">
            <Image 
              src="/img/Hero.jpg"
              width={500}
              height={500}
              alt="A family buy a car, the father, the mother and the babe"
              className="size-full "
            />
          </div>
        </div>
    </section>
   );
}
 
export default Hero;