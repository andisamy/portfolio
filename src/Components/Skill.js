import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import c from '../assets/c.png';
import cpp from '../assets/c++.png';
import java from '../assets/java.png';
import python from '../assets/py.png';
import sql from '../assets/sql.jfif';
import git from '../assets/gitandgithup.png';
import dsa from '../assets/dsa.jfif';
import msOffice from '../assets/msoffice.jfif';
import backimg from '../assets/codeimg4.jpeg';
export default function Skill() {
  return (
    <div>
    <div className="text-white text-center p-3 font-serif skills" 
    style={{backgroundImage:`url(${backimg})`,
    backgroundPosition:'center',
    backgroundSize:'cover',   
    backgroundRepeat:'no-repeat'}}>
      <div className="mb-10">
        <h2 className="text-3xl font-bold mt-5 mb-8 text-shadow-lg shadow-aqua">Skill</h2>
        
        <div className="flex flex-color lg:flex-row justify-around items-center lg:items-center gap-10">
          {/* Front-End Development Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Front End Development</h3>
            <div className="flex  flex-wrap justify-around items-center gap-5 p-5 rounded-lg shadow-2xl shadow-red-500">
              <SkillItem imgSrc={html} skillName="HTML" />
              <SkillItem imgSrc={css} skillName="CSS" />
              <SkillItem imgSrc={js} skillName="JavaScript" />
              <SkillItem imgSrc={react} skillName="React" />
            </div>
          </div>
      
          {/* Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Languages</h3>
            <div className="flex flex-wrap justify-around items-center gap-5 p-5 bg-opacity-80 rounded-lg shadow-2xl shadow-red-500">
              <SkillItem imgSrc={c} skillName="C" />
              <SkillItem imgSrc={cpp} skillName="C++" />
              <SkillItem imgSrc={java} skillName="Java" />
              <SkillItem imgSrc={python} skillName="Python" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Skills */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white mb-4">Others</h3>
        <div className="flex flex-wrap justify-around items-center gap-1 p-3 size-40rounded-lg shadow-2xl shadow-red-500">
          <SkillItem imgSrc={sql} skillName="SQL" />
          <SkillItem imgSrc={git} skillName="Git and GitHub" />
          <SkillItem imgSrc={dsa} skillName="DSA" />
          <SkillItem imgSrc={msOffice} skillName="MS Office" />
        </div>
      </div>
      </div>
    </div>
  );
}

const SkillItem = ({ imgSrc, skillName }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <img src={imgSrc} alt={skillName} className="w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg bg-transparent" />
    <h5 className="text-lg">{skillName}</h5>
  </div>
  
);

 
