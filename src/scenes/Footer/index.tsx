import logo from '@/assets/Logo.png'



export default function Footer() {
  return (
    <footer
    className='bg-red-100 py-16'>
        <div className='justify-content  mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img
            alt='Logo'
            src={logo}/>
            <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore autem illo porro, suscipit necessitatibus rerum totam amet aliquam officiis!
            </p>
            <p>@copyright Evogym All Rights Reserved</p>
        </div>
        <div className='mt-16 basis-1/4'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Lorem ipsum dolor sit amet.</p>
        <p className='my-5'>consectetur adipisicing elit. Laborum, sapiente.</p>
        <p className='my-5'>Minima quasi ipsa excepturi ad deleniti. Deserunt perspiciatis illum ratione nobis rerum!</p>
        </div>
        <div className='mt-16 basis-1/4'>
        <h4 className='font-bold'>Contact Us</h4>
        <p className='my-5'>Lorem ipsum dolor sit amet.</p>
        <p className='my-5'>commodi eaque tempore modi error dolore ut, quisquam, quas esse corrupti ipsum.</p>
        <p className='my-5'>(002)22043772</p>
        </div>
        </div>
    </footer>
  )
}