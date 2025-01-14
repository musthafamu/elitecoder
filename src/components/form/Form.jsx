import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const scriptURL =
      '';
  
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      console.log('Response:', response);
  
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        toast.success('Form submitted successfully!');
        setFormData(defaultFormState);
      } else {
        const errorResult = await response.json();
        console.error('Error result:', errorResult);
        toast.error(`Form submission failed: ${errorResult.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Full Name', name: 'fullname', type: 'text', placeholder: 'John Doe' },
                { label: 'Mobile Number', name: 'mobile', type: 'tel', placeholder: '1234567890' },
                { label: 'Age', name: 'age', type: 'number', placeholder: '20' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'johndoe@example.com' },
                { label: 'College Name', name: 'college', type: 'text', placeholder: 'University of Example', colSpan: 2 },
                { label: 'Address', name: 'address', type: 'textarea', placeholder: '123 Main St, City, Country', colSpan: 2, rows: 3 },
                { label: 'Course', name: 'course', type: 'text', placeholder: 'Computer Science' },
                { label: 'Degree', name: 'degree', type: 'text', placeholder: 'Bachelor of Science' },
                { label: 'Start Year', name: 'startYear', type: 'number', placeholder: '2020' },
                { label: 'End Year', name: 'endYear', type: 'number', placeholder: '2024' },
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
