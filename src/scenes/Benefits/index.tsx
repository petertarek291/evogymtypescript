import HText from '@/Shared/HText';
import { BenefitsType, SelectedPage } from '@/Shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import  BenefetsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import ActionButton from '@/Shared/ActionButton';

const benefitsArr :Array<BenefitsType>= [{
    icon:<HomeModernIcon className='h-6 w-6'/>,
    title:"State of The Art Facilities",
    description:"hello, it's place you can build your body with a good shape"
},{icon:<UserGroupIcon className='h-6 w-6'/>,
title:"100 of Diverse Classes",
description:"hello, it's place you can build your body with a good shape"
},
{icon:<AcademicCapIcon className='h-6 w-6'/>,
title:"Expert and Pro Trainers",
description:"hello, it's place you can build your body with a good shape"
}];
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className='mx-auto min-h-full w-5/6 py-20'>
                <motion.div
                onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
                {/*Header*/}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.2,duration:1}}
                    variants={{
                        hidden:{opacity:0,x:-200},
                        visible:{opacity:1,x:0}
                    }}
                     className='md:my-5 md:w-3/5'>
                        <HText>
                            MORE THAN JUST A GYM
                        </HText>
                        <p className='my-5 text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde, quibusdam impedit quae aliquid mollitia dolorem quo, repellat ea minima repellendus laboriosam vel ducimus optio?</p>
                    </motion.div>
                {/*Benefit*/}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:1}}
                variants={{
                    hidden:{opacity:0,x:-200},
                    visible:{opacity:1,x:0}
                }}
                
                 className='md:flex items-center justify-between gap-8 mt-5'>
                {benefitsArr.map((benefit:BenefitsType)=>(
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />)
            )}
                </motion.div>
                {/* Graphics and Description */}
                <div className='mt-16 item-center justify-between gap-20 md:mt-28 md:flex'>
                    {/* Graphic */}
                    <img
                    className='mx-auto '
                    alt ='Graphic Image'
                    src={BenefetsPageGraphic}
                    />

                    {/* Description */}
                    <div>
                        {/* title */}
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,amount:0.5}}
                        transition={{delay:0.2,duration:1}}
                        variants={{
                            hidden:{opacity:0,x:-200},
                            visible:{opacity:1,x:0}
                        }}>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <div>
                                <HText>
                                    Millions of Happy Members Getting {""}
                                    <span className='text-red-400 '>FIT</span>
                                </HText>
                            </div>
                            </div>
                        </motion.div>
                        {/*Description*/}
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,amount:0.5}}
                        transition={{delay:0.5,duration:2}}
                        variants={{
                            hidden:{opacity:0,x:-200},
                            visible:{opacity:1,x:0}
                        }}
                        >
                            <p
                            className='my-5'
                            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos saepe ad sequi molestias sint nemo, perspiciatis architecto at alias corporis earum optio distinctio ut officia recusandae beatae quam quo laboriosam, totam veniam commodi pariatur itaque ab! Ullam alias laboriosam nostrum esse! Hic sapiente adipisci dolores sint repellat nulla blanditiis?</p>
                            <p className='mb-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum, unde autem officia omnis quia maxime explicabo cupiditate recusandae ea, voluptates perferendis nemo eaque soluta animi qui ullam non laborum.
                            </p>
                            
                        </motion.div>
                        {/* Button */}
                        <div className='relative mt-16'>
                        <div className='before:absolute before:-botton-20 before:right-40 before:z-[-1] before:content-sparkles'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                        </ActionButton>
                        </div>
                        </div>
                    </div>
                </div>
                </motion.div>
        </section>
    )
}

export default Benefits;