import React from 'react'
import PageSection from './PageSection'
// import LI1 from '../assets/LI1.jpg'
// import LI2 from '../assets/LI2.jpg'
// import LI3 from '../assets/LI3.jpeg'
import LI4 from '../assets/LI4.jpg'
import LI5 from '../assets/LI5.png'

const Team = () => {
   const teams = [
       {
    id:1,
    src: LI5,
    title :'Daniyal Azhar',
    subtitle : 'Senior Android Developer',
    children : 'Columbia University',
    style: "shadow-blue-800"
       
},
{
    id:2,
    src: LI4,
    title :'Syed Abdullah Sohail',
    subtitle : 'Full Stack Developer',
    children : 'UET, Lahore',
    style: "shadow-blue-800"
},
{
id:3,
src: LI4,
title :'Irine Schwartz',
subtitle : 'IOS Developer',
children : 'Berkshire University Of Engineering',
style: "shadow-blue-800"}
]
  return (
   <PageSection name= 'team' title="Team" subtitle="The MAST Tech. team is a tight-knit, talented group with a shared vision of delivering consistently great results for our clients, as well as ensuring the agency is a fun, inclusive, challenging place to work and develop a rewarding career.">
<div className='grid grid-cols-2 lg:grid-col-3 h-30 gap-8 text-white text-center items-center justify-center' >
{teams.map(({ id, src, title, subtitle ,children,  style}) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-30 mx-auto" />
              <p className="mt-4 text-sm">{title}</p>
              <p className='text-sm'>{subtitle}</p>
              <p className='flex flex-row items-center justify-center text-xs text-thBlue '>{children}</p>
            </div>
          ))}

</div>
   </PageSection>
  )
}

export default Team