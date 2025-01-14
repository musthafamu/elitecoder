'use client'

import React from 'react';
import { motion } from 'framer-motion';
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
  { name: 'JavaScript', src: js },
  { name: 'HTML', src: html },
  { name: 'MongoDB', src: mongo },
  { name: 'CSS', src: css },
  { name: 'MySQL', src: mysql },
];

function AutoScrollSlider() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white p-4 border-b">
      <h1 className="font-bold text-5xl text-center text-green-600 mb-8 text-shadow">Technology Stack</h1>
      <div className="w-full max-w-3xl mx-auto overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{
            x: [0, -50 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="tech-item flex-shrink-0"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={tech.src} alt={tech.name} className="w-16 h-16" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default AutoScrollSlider;

