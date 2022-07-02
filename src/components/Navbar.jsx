import React from 'react'
import GradientBtn from './GradientBtn'
import {FaBars, FaTimes} from "react-icons/fa"
import TG from "../assets/TG.png"
import { Link } from 'react-scroll'

const Navbar = ({isMenuShown, setIsMenuShown}) => {
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'team'
        },
        {
            id: 4,
            link: 'Why Mast'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
  return (
      <>
    <div className='absolute w-full h-30 bg-black text-white z-20'>
        <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full'>
            <div>
            
                <h1 className='text-thBlue tracking-widest text-3xl'>
                    {/* MAST TECH */}
                    <img src={TG} alt="s" className='h-20 w-25 items-start justify-start bg-gradient-to-b from-blue-900 to-gray-900'  />
                   
                </h1>
            </div>
            <div className='hidden lg:flex items-center'>
                
                <ul className='flex '>
                {links.map(({id, link})=> (
                    <li key={id} className="p-3 uppercase duration-200 hover:text-thBlue cursor-pointer">
                        <Link to={link}
                        spy={true} 
                        smooth 
                        duration={500}>
                        
                        {link}

                        </Link>
                        </li>

                )
                )}
                    
                </ul>
                <GradientBtn className='ml-4 capitalize' title='Get Mast'/>
            </div>
            <div onClick={()=> setIsMenuShown(!isMenuShown)} className='block lg:hidden cursor-pointer'>
                {isMenuShown ? <FaTimes size={30}/> : <FaBars size={30} /> }

            </div>
        </div>
    </div>



<div className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-6 lg:hidden flex justify-center text-center text-2xl duration-500 cursor-pointer ${
    isMenuShown ? "top-8 rounded-b-2xl opacity-95" : "top-[-100%]"}`}>
    <ul>
        {
            links.map(({id, link})=>(
                <li key={id} className="p-4 uppercase"> <Link 
                onClick={() => setIsMenuShown(false)}
                to={link} 
                spy={true}
                smooth 
                duration={500}>
                        
                {link}

                </Link></li>
            ))
        }
        <GradientBtn className="mt-10 capitalize" title={"Get MAST"}/>
    </ul>
    </div>

    </>
  )
}

export default Navbar