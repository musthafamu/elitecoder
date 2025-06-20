import React from 'react';
import certificate from '../../assets/Certificate.jpeg';
import experience from '../../assets/experience.jpg';
function CertificateCard({ text, imageSrc, altText }) {
  return (
    <div className="flex items-start max-w-[500px] bg-gradient-to-br from-green-50 to-white  border-2 p-2 rounded-lg shadow-md">
      <img
        className="w-1/3 h-auto object-cover rounded-md mr-2 mx-auto"
        src={imageSrc}
        alt={altText}
      />
      <p className=" break-words w-2/3 text-lg  mt-0">
        {text}
      </p>
    </div>
  );
}

function Certificate() {
  const certificateData = [
    {
      text: 'We will provide a certificate upon successful completion of the course and submission of a project.',
      imageSrc: certificate,
      altText: 'Certificate 1',
    },
    {
        text: 'We will provide a certificate upon successful completion of the course and submission of a project.',
        imageSrc: experience,
      altText: 'Certificate 2',
    },
  ];

  return (
    <div className="py-6 px-4  border-t">
      <div className="text-center mb-4">
        <h1 className="font-bold text-[40px] text-green-600">Certificates We Offer</h1>
      </div>

      <div className="flex flex-wrap gap-12 justify-center">
        {certificateData.map((item, index) => (
          <CertificateCard
            key={index}
            text={item.text}
            imageSrc={item.imageSrc}
            altText={item.altText}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificate;
