"use client"

import Image from 'next/image';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import {cn} from '@/lib/utils';
import Hint from '@/components/ui/hint';

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
    width: number; // Add width property to the ItemProps interface
    height: number; // Add width property to the ItemProps interface

}


const Item = ( {id , name, imageUrl, width ,height}: ItemProps) => {

    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
    if(!setActive) return null;

    setActive({organization: id});
    };


  return (
    <div className='aspect-square relative'>
       <Hint lable={name} side="right" align="start" sideOffset={18} > 
      <Image
      alt={name}
      src={imageUrl}
      onClick={onClick}
      width={width} // Add width property to the Image component
      height={height} // Add height property to the Image component
      className={cn("rounded-md cursor-pointer opacity-75 hover:opacity-100 tranzition",
      isActive && "opacity-100")}
      />
      </Hint>
    </div>
  )
}

export default Item
