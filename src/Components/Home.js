import Andisamy from '../assets/samyimage2.jpg'
import home from '../assets/codeimage3.jfif'
import { ImLinkedin,ImGithub } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";

export default function Home(){
    return(
        <div className=" bg-black text-white font-serif p-20 pb-20 " style={{
            backgroundImage: `url(${home})`,
            backgroundSize: 'cover',  // Ensures the image covers the entire div
            backgroundPosition: 'center'}  }  >
            <div className="namepage mt-10 text-white-500 p-5pb-5 flex flex-col   md:flex-row">
                <div>
            <h1 className="font-bold  text-4xl md:text-8xl">I AM ANDISAMY A <p>BSC CS</p></h1>
            <h3 className='text-5xl'>Front End Developer</h3>
            <h4 className='flex flex-wrap w-4/5 text-white mt-5 italic text-1xl' >
              As a Front End developer, I specialize in creating responsive,
                  user-friendly interfaces with a keen eye for design and detail.
              <br />
              My expertise lies in transforming ideas into interactive web
              experiences using the latest technologies. I am passionate about
              delivering seamless user experiences that drive engagement and
              satisfaction.
            </h4>
           </div>
          <div className=' flex sm:justify-center '>
          <img src= {Andisamy} className=' w-52 h-48 myimage 'alt=''/>
           </div >
           </div>
           <div className='flex text-blue-500 justify-center mt-8 '>
           <a href='https://www.linkedin.com/in/andi-samy-231398300/'><ImLinkedin className='h-9 w-16  hover:text-red-500 '/></a>
           <a href='https://github.com/dashboard'><ImGithub className='h-9 w-16  hover:text-red-500 '/></a>
           <a href="https://wa.me/6383291283" className="text-blue-500 hover:underline"><FaWhatsappSquare className='text-blue-600 hover:text-red-500 h-9 w-16'/>  </a> 
          <a href="mailto:andisamy014@gmail.com" className="text-blue-500 hover:underline"> <TbBrandGmail className='text-blue-600 hover:text-red-600 h-9 w-16'/> </a>
    <a href="tel:+916383291283" className="text-blue-500 hover:underline">
        <IoMdCall className='text-blue-600 hover:text-red-600 h-9 w-16' /></a>

           </div>
          
        </div>
       
    )
}