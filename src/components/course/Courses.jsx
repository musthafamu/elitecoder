import React from 'react';
import { Code, Layout, PiIcon as Python, Globe, Database, Brain } from 'lucide-react';

function Courses() {
  const courseList = [
    { name: 'MERN Stack', duration: '3 Months', icon: Globe, technology: 'MongoDB, Express, React, Node.js', fee: 25000 },
    { name: 'Full Stack', duration: '3 Months', icon: Code, technology: 'HTML, CSS, JavaScript, Node.js', fee: 25000 },
    { name: 'Python', duration: '3 Months', icon: Python, technology: 'Python, Django, Flask', fee: 25000 },
    { name: 'Frontend', duration: '3 Months', icon: Layout, technology: 'HTML, CSS, JavaScript', fee: 25000 },
    { name: 'Backend', duration: '3 Months', icon: Database, technology: 'Node.js, Express, SQL', fee: 25000 },
    { 
      name: 'AI and ML', 
      duration: '3 Months', 
      icon: Brain, 
      technology: 'Python, TensorFlow, Keras, PyTorch, Scikit-learn', 
      fee: 25000 
    },
  ];
  
  return (
    <div className=" bg-gradient-to-br p-8  border-t">
      <h1 className="text-5xl font-bold mb-8 text-center text-green-600 ">Featured Courses</h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 shadow-md lg:grid-cols-3 gap-6">
        {courseList.map((course, index) => {
          const Icon = course.icon;
          return (
            <div
              key={index}
              className="bg-white border shadow-md border-gray-300  rounded-md   transition-all duration-300 transform hover:scale-200 p-4"
            >
              <div className="flex items-center mb-4">
                <div className='bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4'>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">{course.name}</h2>
              </div>
              <p className="text-green-600 font-medium mb-4">Duration: {course.duration}</p>
              <p className="text-green-600 font-medium mb-4">Technology: {course.technology}</p>
              <p className="text-green-600 font-medium mb-4">Fee: ₹{course.fee}</p>
              <button className="p-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold transition duration-200">
                Register Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
