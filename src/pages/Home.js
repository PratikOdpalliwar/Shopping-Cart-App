import React from 'react'
import ReactPlayer from 'react-player'

const Home = () => {
  return (
<div className="video-container">
<ReactPlayer
url="./vid/vid1.mp4"
playing={true}
loop={true}
muted={true}
width="100%"
height="100%"
>

</ReactPlayer>


</div>
  )
}

export default Home
