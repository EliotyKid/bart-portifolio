"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";


const Hero = () => {
  
  return ( 
    <section className="  w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      	<div className="flex flex-col lg:flex-row gap-4 p-8">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold mb-6">O momento de relizar seus sonhos chegou</h1>
            <p>Conquiste aquilo que sempre almejou para você e sua familia atraves do consósrcio.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="cursor-pointer">Blog</Button>
              <Button variant="outline" className="cursor-pointer">Blog</Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image 
              src="/img/Hero.jpg"
              width={500}
              height={500}
              alt=""
              className="size-full "
            />
          </div>
        </div>
    </section>
   );
}
 
export default Hero;