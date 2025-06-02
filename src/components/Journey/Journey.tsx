import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Step 1: Join Our Program',
    description: 'Get started with a hands-on learning experience designed to bridge the gap between academics and the industry.',
  },
  {
    title: 'Step 2: Final-Year Project Support',
    description: 'Receive one-on-one guidance to plan, build, and complete your academic project successfully.',
  },
  {
    title: 'Step 3: Learn Practical, Job-Ready Skills',
    description: 'Gain real-world knowledge through practical sessions focused on skills employers actually look for.',
  },
  {
    title: 'Step 4: Build Your Professional Portfolio',
    description: 'Work on meaningful projects and compile a strong portfolio that highlights your strengths and capabilities.',
  },
  {
    title: 'Step 5: Placement Assistance',
    description: 'Get personalized support with resume building, interview preparation, and access to job and internship opportunities.',
  },
];


function Journey() {
  return (
    <div className="w-full px-6 py-16 bg-gradient-to-b from-white to-green-50 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-green-600 text-[36px] sm:text-[48px] font-bold mb-4"
      >
        Your Journey with GradMus
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg max-w-2xl mx-auto mb-10"
      >
        A step-by-step path designed to take you from a student to a job-ready professional by the end of your final year.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
