import * as React from "react"

import { Camera } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button"

export default function PhotoMode({value, onClick, onFade }: { value: boolean; onClick: () => void; onFade: () => void }) {
    const handleClick = () => {
        onClick();
    }

    const handleParentFade = () => {
        onFade();
    }

    return (
        <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className={`${ value ? 'hidden' : '' } mainBtn ml-3 share`} variant="outline" size="icon" onClick={handleParentFade}>
                    <Camera className="h-5 w-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="photomode p-10">
                <AlertDialogHeader>
                  <AlertDialogTitle>Switch to screenshot mode?</AlertDialogTitle>
                  <AlertDialogDescription className="p-4">
                    <ul>
                        <li>
                            Everything except the quote and Uncle Iroh will become invisible,
                            including this toggle. 
                        </li>
                        <li className="pt-3 flex justify-content">
                            <p>
                                To exit screenshot mode, <span className="font-bold">click or tap</span> the quote.
                            </p>
                        </li>
                    </ul>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={handleParentFade}>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}