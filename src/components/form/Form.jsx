import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function StudentForm() {
  const defaultFormState = {
    fullname: '',
    mobile: '',
    age: '',
    email: '',
    college: '',
    address: '',
    course: '',
    degree: '',
    startYear: '',
    endYear: '',
  };

  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);


  

  return (
    <>
      <ToastContainer />
      <div
        id="form"
        className="flex bg-gradient-to-br from-green-50 to-white items-center justify-center p-8"
      >
        <div className="from-green-50 to-white rounded-lg shadow-lg p-2 w-full max-w-[600px]">
          <h1 className="text-2xl font-bold text-center mb-6">
            Student Information Form
          </h1>
          <form onSubmit={""} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Full Name', name: 'fullname', type: 'text', placeholder: 'Enter your Name' },
                { label: 'Mobile Number', name: 'mobile', type: 'tel', placeholder: 'Enter your Number' },
                { label: 'Age', name: 'age', type: 'number', placeholder: 'Enter Your age' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Your Email ' },
                { label: 'College Name', name: 'college', type: 'text', placeholder: 'Enter your College Name', colSpan: 2 },
                { label: 'Address', name: 'address', type: 'textarea', placeholder: 'Enter Your Address', colSpan: 2, rows: 3 },
                { label: 'Degree', name: 'degree', type: 'text', placeholder: 'Enter Your Degree' },
                { label: 'Start Year', name: 'startYear', type: 'number', placeholder: 'Enter ' },
                { label: 'End Year', name: 'endYear', type: 'number', placeholder: '2024' },
                { label: 'Inquiry', name: 'inquiry', type: 'textarea', placeholder: 'Your inquiry here...', colSpan: 2, rows: 3 },
              ].map(({ label, name, type, placeholder, colSpan, rows }, index) => (
                <div key={index} className={colSpan ? `md:col-span-${colSpan}` : ''}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {label}
                  </label>
                  {type === 'textarea' ? (
                    <textarea
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={""}
                      rows={rows || 3}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder={placeholder}
                    />
                  ) : (
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={""}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder={placeholder}
                    />
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
