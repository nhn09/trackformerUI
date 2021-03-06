import React, { useEffect } from "react";
import axios from 'axios';
import MainPage from "./MainPage";

export default function VideoInput({ width, height }) {
  

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const [input, setInput] = React.useState();




  const handleFileChange = (event) => {
    event.preventDefault()
    const file = event.target.files[0];
    setInput(file)

    axios.post('http://1e1f-34-68-190-22.ngrok.io/predict', {
      "file": input
    })
    .then( (response) =>{console.log(response)})
    .catch((error)=>{console.log(error);
    });

    const url = URL.createObjectURL(file);// response ashle set sourse e response set kore dibo to show 
    
    
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="VideoInput rounded-l  m-5  items-center max-w-md ">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && <button  class="bg-cyan-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full"
  onClick={handleChoose}>Choose Video</button>}
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      <div className="VideoInput_footer">{source || "Nothing selectd"}</div>

      {source && <MainPage source={source}/> }
    </div>
  );
}
