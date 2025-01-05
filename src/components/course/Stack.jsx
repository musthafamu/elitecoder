import React, { useEffect, useState } from 'react';
import express from '../../assets/svg/express.svg';
import next from '../../assets/svg/nextjs.svg';
import node from '../../assets/svg/node.svg';
import python from '../../assets/svg/python.svg';
import react from '../../assets/svg/react.svg';
import js from '../../assets/svg/js.svg'
import html from '../../assets/svg/html-5.svg'
import mongo from '../../assets/svg/mongodb.svg'
import css from '../../assets/svg/css-3.svg'
import mysql from '../../assets/svg/mysql.svg'

const techStack = [
  { name: 'Express', src: express },
  { name: 'Next.js', src: next },
  { name: 'Node.js', src: node },
  { name: 'Python', src: python },
  { name: 'React', src: react },
  {name:"js",src:js},
  {name:"html",src:html},
  {name:"mongo",src:mongo},
  {name:"css",src:css},
  {name:"mysql",src:mysql},

];

function AutoScrollSlider() {
  return (
    <div className="relative  overflow-hidden flex   p-4 gap-5 flex-col items-center border-b">
      <div className='flex w-full  justify-center'>
      <h1 className='font-bold text-[50px] text-shadow text-green-500'>Tech Stack</h1>

      </div>
      <div className='flex gap-4'>

      {techStack.map((tech) => (
 <div
 key={tech.name}
 className="tech-item flex-shrink-0 transition-transform duration-300 hover:scale-125 hover:rotate-6"
>
 <img src={tech.src} alt={tech.name} className="w-20 h-20" />
</div>

      ))}
      </div>
    </div>
  );
}

export default AutoScrollSlider;

