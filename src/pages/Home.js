import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slide/>
    </div>
  )
}

export default Home