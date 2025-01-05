import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp icon from react-icons

const WhatsAppButton = () => {
  const phoneNumber = "918590229002"; // Include the full phone number with the country code (91 for India)
  const message = "Hello! I have a query."; // Optional pre-filled message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center z-50"
      title="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <FaWhatsapp className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
