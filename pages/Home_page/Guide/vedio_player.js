import React, { useState } from 'react'

const vedio_player = ({ videoSrc, imageSrc }) => {
  const [showImage, setShowImage] = useState(true)
  const toggleImage = () =>{
    setShowImage(!showImage)
  }
  return (
    <div className="video-player">
      <video src={videoSrc} controls={!showImage} onClick={toggleImage}/>
      {showImage && <img src={imageSrc} alt="..." onClick={toggleImage}/>}
    </div>
  )
}

export default vedio_player
