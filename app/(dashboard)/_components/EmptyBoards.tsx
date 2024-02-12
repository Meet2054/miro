"use client";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import Image from "next/image"


const EmptyBoards = () => {

  const { organization } = useOrganization();

  
  const create = useMutation(api.board.create)
  const onclick = () => {

    if(!organization) return;


    create({
      title: "Untitled Board",
      orgId: organization.id
    });

  };


  return (
      <div className="h-full flex flex-col items-center justify-center">
            <Image
              src={"/note.svg"}
              alt="No Boards Found!"
              height={140}    
              width={140}
              className="mt-[100px]"
              />
              <h2 className="mt-6 text-semibold text-2xl">Create your First Board!</h2>
              <p className="text-muted-foreground  textg-sm mt-2 ">Start by creating board for your organization</p>
              <div className=" mt-6 ">
                <Button size="lg" onClick={onclick} >
                    Create Board
                    </Button>
              </div>
        </div>
  )
}

export default EmptyBoards
