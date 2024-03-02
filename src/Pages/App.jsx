import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import Form from '../Layouts/Form'

const app = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      
  {/* Dummy content */}
    <div className="container mx-auto py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <Form/>
      </div>
    </div>

    <footer>
      <Footer/> 
    </footer>


  </>

  )
}

export default app