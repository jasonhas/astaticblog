'use client'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
        console.log('Clicked')
    }

    const Links =[
        {name:"Home",link:"/"},
        {name:"Blog",link:"/blog"},
        {name:"About",link:"/about"},
        {name:"Contact",link:"/contact"},
    ]
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl'>
                    static blog
                </div>
                <div className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={handleToggle}>
                    <AiOutlineMenu className={`${isOpen ? 'hidden': ''}`}/>
                </div>
                <ul className="md:flex md:items-center md:pb-0 absolute md:static pb-12 gap-8 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in hidden">
                        {
                            Links.map((link) =>(
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link href={link.link} className='hover:text-gray-500'>{link.name}</Link>
                            </li>                                
                            ))
                        }
                        <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-blue-500'>btn</button>
                </ul>
                <div className={
                isOpen
                 ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                 : "fixed left-[-100%] top-0 p-10 ease-in-out duration-800"
            }>  
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleToggle} className='cursor-pointer'>
                            <AiOutlineCloseCircle className='text-3xl'/>
                        </div>
                    </div>
                    <div className='flex-col py-4'>
                    <ul className=''>
                    {
                        Links.map((link) =>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7' onClick={() => setIsOpen(false)}>
                            <Link href={link.link} className='hover:text-gray-500'>{link.name}</Link>
                        </li>                                
                        ))
                    }
                    </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar