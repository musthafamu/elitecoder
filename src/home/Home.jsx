import React from 'react'
import Navbar from '../components/navbar/Navbar'
import StudentForm from  '../components/form/Form'
import Footer from '../components/footer/Footer'
import WhatsAppButton from '../components/whatsapp/whatsapp'
import Main from '../components/main/Main'
import Stack from '../components/course/Stack'
import Courses from '../components/course/Courses'
import Certificate from  '../components/certificate/Certificate'
function Home() {
  return (
    <div>
        <nav class="sticky top-0 z-50 bg-white">
            <Navbar />
        </nav>
      {/* <img src={Main} className='w-full ' /> */}
      <Main />
      <Stack/>
        <StudentForm/>
        <Courses/>
        <Certificate  />
        <Footer />
       <WhatsAppButton/>
    </div>
  )
}

export default Home