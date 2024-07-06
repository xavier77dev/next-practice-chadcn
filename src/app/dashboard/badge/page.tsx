"use client"

import { Badge } from "@/components/ui/badge"

export default function Page() {

  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge>example Badge</Badge>
      <Badge capitalize variant={"default"}>default</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge variant={"secondary"}>secondary</Badge>
      <Badge variant={"destructive"}>destructive</Badge>
      <Badge capitalize variant={"info"}>info</Badge>
      <Badge capitalize variant={"success"}>success</Badge>
    </div>
  )
}
