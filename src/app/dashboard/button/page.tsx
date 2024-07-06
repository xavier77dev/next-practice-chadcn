"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast";
import { on } from "events";
import { fsync } from "fs";
import { ChevronRight, Link, Loader2 } from "lucide-react";

const Page = () => {
  const { toast } = useToast();
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant={"destructive"}>desctructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button disabled>secondary</Button>
      <Button onClick={() => {
        toast({
          description: "Your has been click here",
        })
      }}
      >Click me</Button>
      <Button variant={"success"}>success</Button>
      <Button capitalize={false} variant={"success"}>success</Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>

      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div >
  )
}

export default Page;
