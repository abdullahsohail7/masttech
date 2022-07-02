import React from 'react'

const GradientBtn = ({title, className}) => {
  return (
    <button className={`bg-gradient-to-t from-gray-800 to-blue-800 py-2 px-6 text-white rounded-lg duration-300 hover:scale-110 capitalize $ {className} `}>{title}</button>
  )
}

export default GradientBtn