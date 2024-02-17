import React from 'react'
import { Link } from 'react-router-dom';
import {logo}  from '../../assets/image'
import ArrowUp from '../Button/ArrowUp';
import SocialIcons from '../Button/SocialIcons';
import { IoMdMailUnread, IoMdCall } from "react-icons/io";


export default function Footer() {
    return (
        <footer className="bg-gray-200 border-y text-gray-800  pt-7 ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-24"
                                alt="Logo"
                            />
                        </Link>

                        <div className='mt-6'>
                        <SocialIcons />
                        </div>
                        <div  className="flex-col ">
                    
                            <div className=" mt-3">
                                <div className='flex ' > 
                                    <div className='mt-[2px] '><IoMdMailUnread /></div>
                                    <div className='ml-3'>support@eentrepreneur.in</div></div>
                                </div>
                                <div>
                                <div className='flex mt-2'>
                                     <div><IoMdCall /></div> <div className='ml-3'> +91 2269622640</div></div>
                                </div>
                            </div>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className='pl-4'>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase underline ">Resources</h2>
                            <ul className="text-gray-600 font-semibold">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="/gallery" className="hover:underline">
                                       Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/reports" className="hover:underline">
                                       Project Reports
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase underline">Services</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4 hover:underline">
                                Business Ideation & Conceptualization
                                </li>
                                <li className="mb-4 hover:underline">
                                    Entrepreneurship Evolution Program
                                </li>
                                <li className="mb-4 hover:underline">
                                    Comprehensive Project Reports
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold underline text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        ©2024
                        <a href="#" className="hover:underline">
                            <span> eentrepreneur.in</span>
                        </a>
                         . All Rights Reserved.
                    </span>
                    
                </div>
                 
            </div>
            <ArrowUp />
        </footer>
    );
}