import React, { useRef, useState } from 'react';
import Vid1 from "../assets/Vid1.mp4";
// import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import GradientBtn from './GradientBtn';

const HeroSection = (isMenuShown) => {
 const [isVideoPlaying] = useState(true);
 const videoRef = useRef();
//  const handleVideoPause = () => {
//      videoRef.current.pause();
//      setIsVideoPlaying(false);
//  };
//  const handleVideoPlay = () => {
//    videoRef.current.play();
//    setIsVideoPlaying(true);
//  };
  return (
    <div className='flex items-end justify-center w-full h-screen text-center'>
      <video ref={videoRef} src={Vid1} autoPlay loop muted 
      className='object-cover h-full w-full absolute -z-10'
      />
      <div className={`p-8 flex flex-col items-center justify-center duration-500 w-full h-max ${
        isVideoPlaying ? "" : 'bg-black/80'
      }
      ${isMenuShown ? 'opacity-35' : 'opacity-100'}
      `}>
        <div className='bg-gradient-to-r from-black to-gray-700 rounded-2xl opacity-80 shadow-lg shadow-white'>
        <h1 className='text-3xl lg:text-5xl h-max text-blue-500'>
          MAST TECH
          <h1 className='text-3xl lg:text-5xl capitalize mb-8'>Remote <span className='text-white font-bold'> Solutions</span></h1>
        </h1>
        </div>
        <div className='py-2 flex flex-row items-center justify-center '>
          <GradientBtn className='py-2 capitalize ' title= 'Portfolios'/>

          {/* {
            isVideoPlaying ?  <FaPauseCircle size={40} onClick={handleVideoPause} className ='px-2 cursor-pointer hover:scale-110 duration-200'/> :
            <FaPlayCircle size={40} onClick={handleVideoPlay} className='px-2 cursor-pointer hover:scale-110 duration-200 text-blue-800' />

          } */}
       
        </div>
      </div>
    </div>
  )
}

export default HeroSection