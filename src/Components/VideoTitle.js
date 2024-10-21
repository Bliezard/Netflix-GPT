import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6  md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
        <p className=" hidden md:inline-block py-6 text-md w-1/4">{overview}</p>
        <div className='my-4 md:m-0'>
            <button className="bg-white text-black rounded-lg py-1  md:py-4 px-3 text-lg cursor-pointer hover:opacity-80">▶ Play</button>
            <button className="hidden md:inline-block mx-2 bg-gray-500 text-white rounded-lg  p-4 px-4 text-lg bg-opacity-50 cursor-pointer hover:opacity-80">ℹ️ More Info</button> 
        </div>
    </div>
  );
};

export default VideoTitle;
