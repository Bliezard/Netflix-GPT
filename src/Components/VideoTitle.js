import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-md w-1/4">{overview}</p>
        <div>
            <button className="bg-white text-black rounded-lg  p-4 px-8 text-lg cursor-pointer hover:opacity-80">▶ Play</button>
            <button className="mx-2 bg-gray-500 text-white rounded-lg  p-4 px-4 text-lg bg-opacity-50 cursor-pointer hover:opacity-80">ℹ️ More Info</button> 
        </div>
    </div>
  );
};

export default VideoTitle;
