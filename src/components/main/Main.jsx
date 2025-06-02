import React from 'react'
import { motion } from 'framer-motion'
import career from '../../assets/svg/Career.svg';
function Main() {
    return (
      <div className='flex flex-col lg:flex-row justify-between items-center min-h-screen bg-gradient-to-br bg-white  p-8 overflow-hidden'>
        <motion.div 
          className="max-w-2xl mb-12 lg:mb-0 lg:mr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-6"
            style={{ lineHeight: '1.2' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            100% Skill Oriented Training Program 
          </motion.h1>
          <motion.p 
            className="text-gray-700 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We offer job placement assistance after the end of our course along with a scheduled 20-hour pre-placement program. Our pre-placement program includes professional CV making, interview preparation, soft skill training, mock interview sessions, and much more.
          </motion.p>
          <motion.button
            className="group bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg flex items-center space-x-2 overflow-hidden relative"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 8px 15px rgba(56, 161, 105, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="relative z-10">Enroll Now</span>
          
            <motion.div
              className="absolute inset-0 bg-green-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.button>
        </motion.div>
  
        <motion.div
          className="relative w-full max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-green-200 rounded-full"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.img
            src={career}
            alt="Career illustration"
            className='relative w-full h-auto rounded-3xl '
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </div>
    )
  }
  
  export default Main
  
  