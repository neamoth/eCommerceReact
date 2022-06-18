import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'

function Slide() {
  return (
    <div className='parentDiv'>
      {/* leftArrow div*/}
      <div className='leftArrow'>
        <ArrowLeftOutlined/>
      </div>
      {/* slideshow div */}
      <div className='slide'>

      </div>
      {/* rightArrow div*/}
      <div className='rightArrow'>
        <ArrowRightOutlined/> 

      </div>
      
    </div>
  )
}

export default Slide