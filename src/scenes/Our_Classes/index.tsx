import { SelectedPage , ClassType } from '@/Shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import {motion } from 'framer-motion'
import HText from '@/Shared/HText'
import Class from './Class'
const classess:Array<ClassType>=[
  {
  name:"Weight Training Classes",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elitQuibusdam fuga harum pariatur nemo mollitia. Vero doloribus soluta repellat ",
  image:image1
},
{
  name:"Training Classes",
  image:image2
},{
  name:"Fitness Classes",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elitQuibusdam fuga harum pariatur nemo mollitia. Vero doloribus soluta repellat ",
  image:image3
},{
  name:"Adventure Classes",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elitQuibusdam fuga harum pariatur nemo mollitia. Vero doloribus soluta repellat ",
  image:image4
},
{
  name:"Ab Core Classes",
  image:image5
},
{
  name:"Yoga Classes",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elitQuibusdam fuga harum pariatur nemo mollitia. Vero doloribus soluta repellat ",
  image:image6
}];
type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (<section className='w-full bg-red-200 py-40'
  id="ourclassess">
    <motion.div
    onViewportEnter={()=>setSelectedPage(SelectedPage.OurClassess)}>
        <motion.div className='mx-auto w-5/6'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2,duration:1}}
        variants={{
            hidden:{opacity:0,x:-200},
            visible:{opacity:1,x:0}
        }}
        ><div className='md:w-3/5'>
        <HText>Our Classes</HText>
        <p
        className='py-5'
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quibusdam fuga harum pariatur nemo mollitia. 
            Vero doloribus soluta repellat 
            similique! Enim aliquam itaque minus dicta delectus.</p>
        </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflew-x-auto overflew-y-hidden'>
        <ul className='whitespace-nowrap w-[2800px]'>
        {classess.map((item:ClassType,index)=>(
          <Class
          key ={`${item.name}-${index}`}
          name={item.name}
          description={item.description}
          image={item.image}

          />
        ))}
        </ul>
        </div>
    </motion.div>
  </section>
    
  )
}

export default OurClasses