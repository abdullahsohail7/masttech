import React from 'react'
import PageSection from './PageSection'
import prize from '../assets/prize.png'
import shield from '../assets/shield.png'
import sidebar from '../assets/sidebar.png'
import usd from '../assets/usd.png'
import usery from '../assets/usery.png'
import buidling from '../assets/buidling.png'

const WhyMast = () => {
    const WhyM = [
        {
            id: 1,
            src: prize,
            title: "World-class experience",
            subtitle: 'We are obsessed with creating a delightful user experience for you and your team every step of the way—and it shows.',
            style: "shadow-red-800",
          },
          {
            id: 2,
            src: usd,
            title: "Fair Price Guarantee",
            subtitle:"No hidden fees, deposit requirements, surprise costs, minimums, contract lengths, or exclusivity agreements. Ever.",
            style: "shadow-yellow-800",
          },
          {
            id: 3,
            src: usery,
            title: "People with Passion",
            subtitle:"Our compliance experts are on the ground in every continent, proactively monitoring and improving processes for you.",
            style: "shadow-green-800",
          },
          {
            id: 4,
            src: shield,
            title: "Protecting IP at all costs",
            subtitle:"Trust our stronger-than-they-need-to-be intellectual property and invention rights protections.",
            style: "shadow-blue-800",
          },
          {
            id: 5,
            src: sidebar,
            title: "Availability around the clock ",
            subtitle:"End users expect always on and incredible speed. We match with continuous ways to track consumer feedback, fix bugs, and release the latest and greatest product.",
            style: "shadow-orange-800",
          },
          {
            id: 6,
            src: buidling,
            title: "Prepared for Future",
            subtitle:"Automattic, Buffer, GitLab, Invision, and Zapier all have from 100 to nearly 1,000 remote employees.",
            style: "shadow-white",
          },
        
        ];
    
  return (
   <PageSection name='Why Mast' title='Why Mast' subtitle='Why you should choose MAST Technologies'>
         


   

        <div className="bg-gradient-to-r from-blue-900 to-thBlue w-screen-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-white">
          {WhyM.map(({ id, src, title,subtitle, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-lg">{title}</p>
              <p className='text-md mt-2'>{subtitle}</p>
            </div>
          ))}
        </div>
      














   </PageSection>
  )
}

export default WhyMast