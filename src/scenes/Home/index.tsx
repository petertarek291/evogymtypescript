import useMediaQuery from '@/Hooks/useMediaQuery';
import ActionButton from '@/Shared/ActionButton';
import { SelectedPage } from '@/Shared/types'
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  
    return <section
    id="home"
    className='gap-16 bg-rose-100 pb-10 py-10 md:h-full md:pb-0'>
<motion.div 
onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 '>
    {/* Main Header*/}
    <div className='z-10 mt-32 md:basis-3/5'>
        {/*Headings*/}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:1}}
        variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
        }}
        className='md:-mt-20'>
            <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext '>
                    <img  alt='homepage text'src={HomePageText}/>
                </div>
            </div>
            <p className='mt-8 text-sm md:text-start'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellendus, provident vel itaque ipsum, odio unde cupiditate voluptate accusantium quis corrupti, a tempore pariatur labore.
            </p>
        </motion.div>
        {/*Action*/}
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2,duration:1}}
        variants={{
            hidden:{opacity:0,x:-200},
            visible:{opacity:1,x:0}
        }}
         className='mt-8 items-center gap-8 flex '>
            <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
            </ActionButton>
            <AnchorLink
            className='text-sm font-bold text-red-500 underline hover:text-red-900 p-5'
            onClick={()=>{setSelectedPage(SelectedPage.ContactUs)}}
            href={`#${SelectedPage.ContactUs}`}>
            Learn more...
            </AnchorLink>
            
        </motion.div>
    </div>
    {/* Image*/}
    <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
        <img alt="homepage graphic" src={HomePageGraphic}/>
    </div>
</motion.div>
{/* Sponsors */}
{isAboveMediumScreens && (
    <div className='h-[150px] w-full bg-red-100 py-10'>
        <div className='mx-auto w-5/6 '>
            <div className='flex w-3/5 items-center justify-between gap-8'>
                <img alt="redbull-spnosor" src={SponsorRedBull}/>
                <img alt="Forbes-spnosor" src={SponsorForbes}/>
                <img alt ="Fortune-sponsor"src={SponsorFortune}/>
            </div>
        </div>
    </div>
)}
    </section>

}

export default Home;