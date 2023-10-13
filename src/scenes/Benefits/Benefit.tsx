import { SelectedPage } from '@/Shared/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    icon:JSX.Element,
    title:string,
    description:string,
    setSelectedPage:(value:SelectedPage)=>void
}

function Benefit({icon,title,description,setSelectedPage}: Props) {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-red-200 p-4'>
        {icon}
        </div>
        </div>
        <h4 className='font-bold '>
            {title}
        </h4>
        <p className='my-3 '>{description}</p>
        <AnchorLink
            className='text-sm font-bold text-red-500 underline hover:text-red-900 p-5'
            onClick={()=>{setSelectedPage(SelectedPage.Benefits)}}
            href={`#${SelectedPage.Benefits}`}>
            Learn more...
            </AnchorLink>
    </div>
  )
}

export default Benefit