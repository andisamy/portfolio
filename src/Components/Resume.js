import React from "react";
import resumePDF from "../assets/AndisamyResume.pdf";

function ResumeViewer() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
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
  );
}

export default ResumeViewer;
