
import {Plus} from 'lucide-react';
import { OrganizationProfile } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog,
            DialogTrigger,
            DialogContent,
} from "@/components/ui/dialog";


const  InviteButton = () => {
  return (
    <Dialog>
       <DialogTrigger asChild>
           <Button variant={"outline"} >
               <Plus className=" h-4 w-4 mr-2"/>
               Invite member
           </Button>
        </DialogTrigger>
        <DialogContent>
            <OrganizationProfile/>
        </DialogContent>   
    </Dialog>
  )
}

export default InviteButton