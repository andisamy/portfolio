import React, { useState } from 'react';
import resumePDF from "../assets/AndisamyResume.pdf";
import { FaWhatsappSquare } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";
import bgimage from '../assets/codeimg1.jpeg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log(formData);
    setSubmitted(true);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='flex flex-col md:flex-row   justify-around bg-gray-800 'style={
      {backgroundImage:`url(${bgimage})`,
    backgroundPosition:'center',
    backgroundSize:'cover'}
    }> 
      <div>
      <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">My Resume</h1>
      <div className="bg-gray-600 bg-opacity-60 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <iframe
          src={resumePDF}
          className="w-full h-96 mb-4"
          title="Resume PDF"
        ></iframe>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={() => window.open(resumePDF)}
        >
          View Full Page
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => window.location.href = resumePDF}
          download
        >
          Download Resume
        </button>
      </div>
    </div>    
      </div>


      <div>
    <div className="contact-container py-5 ">
      <h2 className="text-2xl font-bold text-center mb-6  font-serif">Contact Me</h2>
      
      {submitted ? (
        <div className="text-center ">
          <h2 className="text-xl">Thank you for your message!</h2>
          <p>I will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-opacity-60  p-3 px-20 py-4 bg-gray-900 rounded-lg shadow-lg">
          <div className="mb-5 pt-3 ">
            <label htmlFor="name" className="block text-lg mb-2 text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 hover:bg-gray-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2 text-white  ">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded hover:bg-gray-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className='block text-lg mb-2 text-white'>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border rounded hover:bg-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg mb-7 hover:bg-red-900 shadow-red-500 transition duration-200"
          >
            Send Message
          </button>
        </form>
      )}
       </div>
      </div>
<div className=''>
      <div className="mt-5 text-center flex flex-col align-center md:mt-56">
        <h2 className="text-2xl mb-4 font-bold "> Reach Me Directly</h2>
        <form className='flex gap-3 justify-center'>
        <p>

      <a href="https://wa.me/6383291283" className="text-blue-500 hover:underline"><FaWhatsappSquare className='text-blue-600 hover:bg-red-500 h-14 w-14'/>  </a> 
   </p>
        <p className='color-blue-500'>
          
          <a href="mailto:andisamy014@gmail.com" className="text-blue-500 hover:underline"> <TbBrandGmail className='text-blue-600 hover:bg-red-600 h-16 w-20'/> </a>
        </p>
        <p className='color-blue-500'>
    <a href="tel:+916383291283" className="text-blue-500 hover:underline">
        <IoMdCall className='text-blue-600 hover:bg-red-600 h-16 w-20' />
    </a>
</p>

       
        </form>
      </div>
   
    </div>
    </div>
    
  );
};

export default Contact;
