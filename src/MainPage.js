import React from 'react'
import VideoInput from './VideoInput'

const MainPage = ({source}) => {
  return (
    <div class= " min-w-sm mx-auto bg-white rounded-xl shadow-lg p-5 flex flex-col items-center space-x-4">
  
    <div class="text-xl font-medium text-black">Output</div>
    <video source={source}></video>
   
    
  
</div>
  )
}

export default MainPage