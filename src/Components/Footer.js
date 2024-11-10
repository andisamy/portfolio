import React from 'react';
import { ImLinkedin,ImGithub } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto text-center">
        <p className=" mt-3 text-1xl text-blue-700">© {currentYear} Developed by Andisamy A All rights reserved.</p>
        <div className='flex text-blue-500 justify-center mt-8 '>
           <a href='https://www.linkedin.com/in/andi-samy-231398300/'><ImLinkedin className='h-9 w-16  hover:text-red-500 '/></a>
           <a href='https://github.com/dashboard'><ImGithub className='h-9 w-16  hover:text-red-500 '/></a>
           <a href="https://wa.me/6383291283" className="text-blue-500 hover:underline"><FaWhatsappSquare className='text-blue-600 hover:text-red-500 h-9 w-16'/>  </a> 
          <a href="mailto:andisamy014@gmail.com" className="text-blue-500 hover:underline"> <TbBrandGmail className='text-blue-600 hover:text-red-600 h-9 w-16'/> </a>
           <a href="tel:+916383291283" className="text-blue-500 hover:underline">
        <IoMdCall className='text-blue-600 hover:text-red-600 h-9 w-16' /></a>
         </div>
           </div>
           </footer>
  )}
  export default Footer;