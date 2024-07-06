"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


function Page() {
  return (
    <div className="flex flex-col items-center w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        autoplay={1000}
        // plugins={[Autoplay({ delay: 1000 })]}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>




      {/*   <CarouselContent> */}
      {/*     {Array.from({ length: 5 }).map((_, index) => ( */}
      {/*       <CarouselItem key={index}> */}
      {/*         <div className="p-1"> */}
      {/*           < Card className=""> */}
      {/*             <CardHeader> */}
      {/*               <CardTitle>Create project</CardTitle> */}
      {/*               <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      {/*             </CardHeader> */}
      {/*             <CardContent> */}
      {/*               <form> */}
      {/*                 <div className="grid w-full items-center gap-4"> */}
      {/*                   <div className="flex flex-col space-y-1.5"> */}
      {/*                     <Label htmlFor="name">Name</Label> */}
      {/*                     <Input id="name" placeholder="Name of your project" /> */}
      {/*                   </div> */}
      {/*                   <div className="flex flex-col space-y-1.5"> */}
      {/*                     <Label htmlFor="framework">Framework</Label> */}
      {/*                     <Select> */}
      {/*                       <SelectTrigger id="framework"> */}
      {/*                         <SelectValue placeholder="Select" /> */}
      {/*                       </SelectTrigger> */}
      {/*                       <SelectContent position="popper"> */}
      {/*                         <SelectItem value="next">Next.js</SelectItem> */}
      {/*                         <SelectItem value="sveltekit">SvelteKit</SelectItem> */}
      {/*                         <SelectItem value="astro">Astro</SelectItem> */}
      {/*                         <SelectItem value="nuxt">Nuxt.js</SelectItem> */}
      {/*                       </SelectContent> */}
      {/*                     </Select> */}
      {/*                   </div> */}
      {/*                 </div> */}
      {/*               </form> */}
      {/*             </CardContent> */}
      {/*             <CardFooter className="flex justify-between"> */}
      {/*               <Button variant="outline">Cancel</Button> */}
      {/*               <Button>Deploy</Button> */}
      {/*             </CardFooter> */}
      {/*           </Card > */}
      {/*         </div> */}
      {/*       </CarouselItem> */}
      {/*     ))} */}
      {/*   </CarouselContent> */}
      {/*   <CarouselPrevious /> */}
      {/*   <CarouselNext /> */}
      {/* </Carousel> */}
    </div>
  )
}

export default Page;
