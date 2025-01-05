import React, { useState } from 'react';

export default function StudentForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    age: '',
    email: '',
    college: '',
    address: '',
    course: '',
    degree: '',
    startYear: '',
    endYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div id='form' className=" flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-2 w-full max-w-[600px]">
        <h1 className="text-2xl font-bold text-center mb-6">Student Information Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="1234567890"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College Name</label>
              <input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="University of Example"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="123 Main St, City, Country"
              ></textarea>
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Computer Science"
              />
            </div>
            <div>
              <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Bachelor of Science"
              />
            </div>
            <div>
              <label htmlFor="startYear" className="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
              <input
                type="number"
                id="startYear"
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="2020"
              />
            </div>
            <div>
              <label htmlFor="endYear" className="block text-sm font-medium text-gray-700 mb-1">End Year</label>
              <input
                type="number"
                id="endYear"
                name="endYear"
                value={formData.endYear}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
                placeholder="2024"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}