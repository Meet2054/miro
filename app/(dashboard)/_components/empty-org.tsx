import Image from 'next/image'
import React from 'react'
import { CreateOrganization } from '@clerk/nextjs' 
import { Button } from '@/components/ui/button' 
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from '@/components/ui/dialog'



const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Image 
      src='/elements.svg'
      alt="empty org"
      height={200}
      width={200}
      />
      <h2 className=' text-2xl font-semibold mt-6 '>
        Welcome to Board 
      </h2> 
      <p className="text-muted-foreground text-sm mt-2 ">
        Create an organization to get started
      </p>
      <div className='mt-6' >
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" >
                    Create organization
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-transparent p-0 border-none max-w-[480px] " >
                <CreateOrganization/>
            </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default EmptyOrg
