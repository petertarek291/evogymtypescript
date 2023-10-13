import { SelectedPage } from "@/Shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string
    selectedPage:SelectedPage
    setSelectedPage:(value:SelectedPage)=>void
}

export default function Link({page,
    selectedPage,
    setSelectedPage 
}: Props) {
    const lowerPageCase=page.toLowerCase().replace(/ /g,'')as SelectedPage
  return (
    <AnchorLink
    className={`${selectedPage===lowerPageCase ? "text-red-500":""}
    transition duration-500 hover:text-red-300
    `}
    href={`#${lowerPageCase}`}
    onClick={()=>setSelectedPage(lowerPageCase)}
    >
{page}
    </AnchorLink>
    )
}