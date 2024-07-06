"use client"

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

function Page() {
  const [checkbox, setCheckbox] = useState(false)

  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms"
          checked={checkbox}
          onCheckedChange={(value: boolean) => setCheckbox(value)} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        {
          checkbox ?
            <Badge variant={"success"}>Great</Badge>
            : <Badge variant={"destructive"}>warning!</Badge>
        }
      </div>
    </>
  )
}

export default Page;
