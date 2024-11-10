import React, { useState } from "react";
import bscImage from '../assets/clgimage3.jpg'; // Updated variable names for clarity
import hscImage from '../assets/school2.png'; // Example for school image

export default function AboutMe() {
  const [currentImage, setCurrentImage] = useState("bsc");

  // Function to handle image swap 
  const handleNext = () => {
    setCurrentImage(currentImage === "bsc" ? "hsc" : "bsc");
  };

  const handlePrevious = () => {
    setCurrentImage(currentImage === "hsc" ? "bsc" : "hsc");
  };

  return (
    <div className="relative bg-gray-500 mt-[-50px] h-screen flex items-center font-serif justify-center">
      <h3 className="absolute top-4 text-center text-3xl font-bold text-white mt-5 z-10">Education</h3>
      
      {/* Left Button to go back */}
      <button
        className="absolute left-4  text-blue-600 px-4 py-2 rounded hover:bg-red-700 transition z-10"
        onClick={handlePrevious}
      >
        &#9664; {/* Left arrow symbol */}
      </button>

      {/* Display B.Sc or HSC based on the state */}
      <div
        className="w-full h-full bg-cover bg-center text-center text-white hover:text-black font-bold p-12 relative transition-all duration-500"
        style={{
          backgroundImage: `url(${currentImage === "bsc" ? bscImage : hscImage})`, // Corrected the image swap logic
        }}
      >
        {/* Content for B.Sc */}
        {currentImage === "bsc" && (
          <div className="pt-20">
            <h3 className="text-2xl font-bold text-red-500 mb-2">B.Sc COMPUTER SCIENCE</h3>
            <h4 className="text-xl">Sacred Heart College of Arts and Science,</h4>
            <h5 className="text-lg mb-2">Dindigul. 2021-2024</h5>
            <h6 className="text-base">CGPA | 7.60/10</h6>
            <h6 className="text-base">Percentage | 72.2%</h6>
          </div>
        )}

        {/* Content for HSC */}
        {currentImage === "hsc" && (
          <div className="pt-20">
            <h3 className="text-2xl font-bold text-red-500 mb-2">HSC</h3>
            <h4 className="text-xl">Government Hr.Sec.School, Sirugudi,</h4>
            <h5 className="text-lg mb-2">Dindigul. 2020-2021</h5>
            <h6 className="text-base">Percentage | 76%</h6>
            
            <br />

            <h3 className="text-2xl font-bold text-red-500 mt-6 mb-2">SSLC</h3>
            <h4 className="text-xl">Government Hr.Sec.School, Sirugudi,</h4>
            <h5 className="text-lg mb-2">Dindigul. 2018-2019</h5>
            <h6 className="text-base">Percentage | 66%</h6>
          </div>
        )}
      </div>

      {/* Right Button to go forward */}
      <button
        className="absolute right-4 bg-white-500 text-blue-600 px-4 py-2 rounded hover:bg-red-700 transition z-10"
        onClick={handleNext}
      >
        &#9654; {/* Right arrow symbol */}
      </button>
    </div>
  );
}
