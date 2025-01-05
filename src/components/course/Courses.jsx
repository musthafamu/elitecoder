import React from 'react';
import { Code, Layout, PiIcon as Python, Globe, Database } from 'lucide-react';

function Courses() {
  const courseList = [
    { name: 'MERN Stack', duration: '3 Months', icon: Globe },
    { name: 'Full Stack', duration: '3 Months', icon: Code },
    { name: 'Python', duration: '3 Months', icon: Python },
    { name: 'Frontend', duration: '3 Months', icon: Layout },
    { name: 'Backend', duration: '3 Months', icon: Database },
  ];

  return (
    <div className=" bg-gradient-to-br p-8  border-t">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-600 ">Featured Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseList.map((course, index) => {
          const Icon = course.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className='bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4'>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">{course.name}</h2>
              </div>
              <p className="text-green-600 font-medium mb-4">Duration: {course.duration}</p>
    <button className=" p-2 rounded-md bg-green-500 hover:bg-green-600 text-white">
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
