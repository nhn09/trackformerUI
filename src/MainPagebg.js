import React from 'react'
import MainPage from './MainPage'
import VideoInput from './VideoInput'

const MainPagebg = () => {
  return (
      <div>

      <div class="container mx-auto p-10 text-slate-100 bg-gradient-to-r from-teal-900 to-cyan-500">
<h1 class="text-2xl font-bold">TrackTick</h1>
   <p class="mt-5">Detect objects from your video!</p>

    </div>
  <div className='flex justify-center'>
  <VideoInput width={500} height={300} />
  </div>
   
 {/* <MainPage/> */}
    
   
    </div>

  
  )
}

export default MainPagebg