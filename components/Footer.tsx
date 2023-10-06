import { HeartIcon } from '@heroicons/react/24/solid';
import {FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'
import Link from 'next/link'
const Footer = () => {

    return (
        <>
        <footer className='mt-auto'>
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start px-20 py-5 md:p-20">
            <div className="p-5">
                <ul>
                    <p className="text-gray-800 font-bold text-3xl pb-6">
                        static<span className="text-blue-600">blog</span>
                    </p>
                    <div className="flex gap-6 pb-5">
                        <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'/>
                        <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600'/>
                        <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600'/>
                        <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
                    </div>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Blog</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Posts</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>AI Prompts</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Gallery</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Videos</li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Info</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Projects</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Tutorials</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>The Ranch</li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contact</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>FAQ</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Downloads & Resources</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Videos</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
            <h1 className='text-gray-800 font-semibold'>&copy; 2022-2023 All rights reserved. Built with &#128420; by <Link href="https://qube6.digital" target="blank">Qube 6 Digital</Link></h1>
        </div>
        </footer>
        </>
    )
}

export default Footer;