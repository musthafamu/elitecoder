import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              <span className="hover:text-green-600 transition-colors duration-300">
                123 Main St, City, Country
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2 text-green-600" />
              <a href="tel:+1234567890" className="hover:text-green-600 transition-colors duration-300">
                +1 (234) 567-890
              </a>
            </p>
            <p className="flex items-center">
              <FaWhatsapp className="mr-2 text-green-600" />
              <a href="https://wa.me/1234567890" className="hover:text-green-600 transition-colors duration-300">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/" className="hover:text-green-600 transition-colors duration-300">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/" className="hover:text-green-600 transition-colors duration-300">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to providing excellent services to our customers. Feel free to reach out to us for any inquiries.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

