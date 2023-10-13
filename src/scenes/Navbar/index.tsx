import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/Shared/types';
import useMediaQuery from '@/Hooks/useMediaQuery';
import ActionButton from '@/Shared/ActionButton';

type Props = {
    isTopofPage:boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopofPage, selectedPage, setSelectedPage }: Props) => {
    const [isMenuTaggled, setIsMenuToggled] = useState<boolean>(false)
    const flexItems = 'flex items-center justify-between'
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const navbarBackground=isTopofPage?'':'fixed bg-red-100 drop-shadow';
    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexItems}fixed top-0 z-50 w-full py-6`}
            >
                <div className={`${flexItems} mx-auto w-5/6 `}>
                    <div className={`${flexItems} w-full gap-16 `}>

                        <img alt='Logo' src={logo} />
                        {isAboveMediumScreens ? (
                            <div className={`${flexItems} w-full `}>
                                <div className={`${flexItems} gap-8 text-sm `}>
                                    <Link
                                        page={'Home'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page={'Benefits'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page={'Our Classess'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page={'Contact Us'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${flexItems} gap-8 text-lg`}>
                                    <a href='#'>Sign In</a>
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>
                        ) :

                            <button
                                className='rounded-full bg-yellow p-2'
                                onClick={() => setIsMenuToggled(!isMenuTaggled)}
                            >
                                <Bars3Icon className='h-6 w-6 text-white' />
                            </button>
                        }
                    </div>
                </div>
            </div>

            {/*Mobile Menu */}
            {!isAboveMediumScreens && isMenuTaggled && (
                <div className='fixed right-0 bottom-0 z-100 h-full w-[300px] bg-red-100 bg-fixed drop-xl'>
                    <div className='flex justify-end p-12'>
                        <button onClick={() => { setIsMenuToggled(!isMenuTaggled) }}>
                            <XMarkIcon className='h-6 w-6 text-red-500' />
                        </button>
                    </div>
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <Link
                            page={'Home'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page={'Benefits'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page={'Our Classess'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page={'Contact Us'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                    </div>

                </div>
            )}
        </nav>
    )
}

export default Navbar