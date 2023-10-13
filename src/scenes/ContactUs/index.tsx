import HText from '@/Shared/HText'
import { SelectedPage } from '@/Shared/types'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion'



type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function ContactUs({ setSelectedPage }: Props) {
    const inputSyle =`mt-3 w-full rounded-lg bg-red-400 px-5 py-3 placeholder-white`
    const {
        register,
        trigger,
        formState:{errors}
    }=useForm();
    const onSubmit=async (e:any)=>{
        const isValid=await trigger();
        if (!isValid){
            e.preventDefault();
        }
    }
    return (
        <section
            id='contactus'
            className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* Header */}
                <motion.div
                    className='md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <HText>
                        <span className='text-red-500'>Join Now</span> TO GET IN SHAPE
                    </HText>
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur nobis esse dolorem eos, ipsum commodi! Officiis aspernatur ad in eius, voluptatibus deleniti saepe sed voluptatem dolorem earum recusandae itaque?
                    </p>
                </motion.div>
                {/* Form & Image*/}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}>
                            <form
                            target='_blank'
                            onSubmit={onSubmit}
                            method='POST'
                            action='https://formsubmit.co/ptarek87@gmail.com'
                            >
                                 <input
                                 type='text'
                                 placeholder='NAME'
                                 className={inputSyle}
                                 {...register("name",{
                                    required:true,
                                    maxLength:100,
                                 })}
                                 />
                                 {errors.name && (
                                 <p
                                 className='mt-1 text-red-600'>
                                    {errors.name.type==="required"&& "this field is required."}
                                    {errors.name.type==="maxLength"&& "Max Length is 100 char."}
                                 </p>)}
                                 <input
                                 {...register('email',{
                                    required:true,
                                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                 })}
                                 type='email'
                                 placeholder='E-MAIL'
                                 className={inputSyle}
                                 />
                                 {errors.email && (
                                 <p
                                 className='mt-1 text-red-600'>
                                    {errors.email.type==="required"&& "this field is required."}
                                    {errors.email.type==="pattern"&& "Max Length is 100 char."}
                                 </p>)}
                                 <textarea
                                 cols={50}
                                 rows={4}
                                 placeholder='MESSAGE'
                                 className={inputSyle}
                                 {...register("message",{
                                    required:true,
                                    maxLength:2000,
                                 })}
                                 />
                                 {errors.message && (
                                 <p
                                 className='mt-1 text-red-600'>
                                    {errors.message.type==="required"&& "this field is required."}
                                    {errors.message.type==="maxLength"&& "Max Length is 2000 char."}
                                 </p>)}
                                 <button
                                 type='submit'
                                 className='mt-5 rounded-lg bg-red-400 px-20 py-3 text-black transition duration-500 hover:text-black hover:bg-yellow'>
                                    Submit
                                 </button>
                            </form>
                    </motion.div>
                    <motion.div
                    className='relative mt-16 basis-2/5 md:mt-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay:0.2, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    >
                        <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img 
                            alt="contact us image"
                            src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs

