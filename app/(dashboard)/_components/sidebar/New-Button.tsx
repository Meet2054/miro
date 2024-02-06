"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog,
        DialogTrigger,
        DialogContent,

} from "@/components/ui/dialog";
import Hint from "@/components/ui/hint";

const NewButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div className="aspect-squre">
            <Hint lable="Create Organization" side="right" align="start" sideOffset={18}>
            <button className='bg-white/25 h-full w-full rounded-md 
            flex justify-center items-center opacity-60 hover:opacity-100 transition '>
                <Plus className="text-white "/>
            </button>
            </Hint>
            </div>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent boarder-none max-w-[480px] ">
            <CreateOrganization />  
        </DialogContent>
      
    </Dialog>
  )
}

export default NewButton
