import React from 'react'
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip"

export interface HintProps {
    lable: string,
    children: React.ReactNode,
    side?: 'top' | 'bottom' | 'left' | 'right',
    align?: 'start' | 'center' | 'end',
    sideOffset?: number,
    alignOffset?: number,
};

 

const Hint = ({lable,
            children,
            side,
            align,
            sideOffset,
            alignOffset}:HintProps) => {
          return (
            <TooltipProvider>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild >
                        {children}
                    </TooltipTrigger>
                    <TooltipContent className="text-white bg-black border-black "
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}
                    >
                        <p className='text-semibold capitalize '>
                            {lable}
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
          )
        }

export default Hint