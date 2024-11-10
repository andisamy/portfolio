
import React from 'react';
import calculator from '../assets/calculator.jpeg';
import bookskey from '../assets/bookskey.jpeg';
import clgbot from '../assets/clgbot.jpeg'
import portpolio from '../assets/portpolio.jpg'
const projectsData = [
  {
    title: 'Project Portfolio',
    description: 'My portfolio, built with React.js and Tailwind CSS, highlights my web development skills through a clean, responsive design.The site reflects my technical expertise and creativity.',
    image:portpolio, 
    githubLink: 'https://github.com/andisamy/calculate',
    liveDemoLink: 'https://project-three.com',
  },
  
  {
    title: 'Project Calculator',
    description: 'A responsive calculator built using HTML, CSS, and JavaScript that allows users to perform basic arithmetic operations and responsive Design.',
    image: calculator, 
    githubLink: 'https://github.com/andisamy/calculate',
    liveDemoLink: 'https://andisamy.github.io/calculate/',
  },
  {
    title: ' Project BooksKey ',
    description: 'The Bookeskey wep application build using Html ,Css and Javascript and Responsive Design for Gathering Books information.',
    image: bookskey, 
    githubLink: 'https://github.com/andisamy/Bookskey',
    liveDemoLink: '  https://andisamy.github.io/Bookskey/',
  },
  {
    title: 'College Bot',
    description: '"A PHP-based college bot web application that provides accurate, contextually relevant answers to user queries. It serves as a digital assistant for college-related inquiries, delivering prompt and reliable information.',
    image: clgbot, 
    githubLink: 'https://github.com/andisamy/calculate',
    liveDemoLink: 'https://project-three.com',
  },
  
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="projects-section py-10 bg-gray-800">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card relative overflow-hidden bg-white rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 "
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 p-6"
              >
                <h3 className="text-xl font-semibold mb-2 animate-slideInUp">{project.title}</h3>
                <p className="text-gray-200 mb-4 animate-slideInUp delay-200">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-200 animate-slideInUp delay-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-green-500 rounded hover:bg-green-600 transition duration-200 animate-slideInUp delay-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
