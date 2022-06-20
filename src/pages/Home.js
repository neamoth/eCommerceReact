import React from 'react'
import Announce from '../components/Announce'
import Catagories from '../components/Catagories'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Products from '../components/Products'

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slide/>
      <Catagories/>
      <Products/>

    </div>
  )
}

export default Home