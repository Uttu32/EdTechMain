import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto w-[600px] flex flex-col items-center font-inter'>
      <h1 className='font-semibold text-[36px] leading-[44px] text-center'>
        Get in Touch
      </h1>
      <p className='font-[500] text-[16px] leading-[24px] text-center text-[#838894] my-[10px] '>
        We'd love to here for you, Please fill out this form.
      </p>
      <div className='w-full mb-[50px]'>
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection
