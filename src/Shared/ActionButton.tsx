import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void;
}

export default function ActionButton({ children , setSelectedPage }: Props) {
  return (
    <AnchorLink
    className='rounded-md bg-yellow px-10 py-5 hover:bg-red-500 hover:text-white'
    onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}