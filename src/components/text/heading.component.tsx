import React from "react"

type IHeadingProps = {
type:string;
children:JSX.Element
}
const headingTypes:{
    [key:string]:string
} = {
   h1:'font-body text-[80px] leading-[104px]',
   h2:'font-body text-[40px] leading-[52px] -tracking-[1.5px]',
   h3:'font-display text-[12px] leading-[25px] tracking-[2.6px] font-bold',
   h4:'font-display text-[11px] leading-[25px] tracking-[1px]', 
}
export const Heading =({type, children}:IHeadingProps)=><h2 className={headingTypes[type]}>{children}</h2>