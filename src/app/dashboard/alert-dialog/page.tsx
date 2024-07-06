"use client"

import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";

export default function Page() {
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState(false);

  useEffect(() => {

  }, [])


  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog open={isOpenAlertDialog} onOpenChange={setIsOpenAlertDialog
      }>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log("cancel")
            }>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("continue")}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog >


      <Button onClick={(open) => setIsOpenAlertDialog(true)} >Example</Button>

    </div>
  )
}
