import React from 'react'

const PageSection = ({name, title,image, subtitle, children}) => {
  return (
    <div name={name} className='max-w-screen-xl mx-auto h-fit'>
        <div className='my-32 mx-8 text-center lg:text-left'>
            <h1 className='text-4xl'>{title}</h1>
            <img src={image} alt="" />
            <p className='mt-8 mb-16'>{subtitle}</p>
            {children}
        </div>
    </div>
  )
}

export default PageSection