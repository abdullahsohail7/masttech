import React from 'react'
import PageSection from './PageSection'
import ContactImage from "..//assets/contact-us.jpg"
import { FaLinkedin,  FaPhone } from 'react-icons/fa'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <PageSection  name='contact' title='Contact' subtitle=" Have questions about how global employment really works? Want to get in touch just to say, Hi? We'd love to hear from you.">

       <div className='flex flex-col lg:flex-row gap-8 mt-4'>

    <div className='w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center'>

<img src={ContactImage} alt="contact" className='rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple' />
<div className='grid grid-cols-2 mx-auto w-4/5 gap-10 py-12'>
    <div className='flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-110 duration-200 p-3 cursor-pointer'>
        <FaLinkedin size={25}/>
    </div>
    <div className='flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-110 duration-200 p-3 cursor-pointer'>
        <FaPhone size={25}/>
    </div>
</div>

    </div>



    <div className='w-full lg:w-1/2 h-full rounded-xl p-4'>


<ContactForm/>


    </div>


       </div>
    </PageSection>
  )
}

export default Contact