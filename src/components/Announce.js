import { Close } from '@mui/icons-material'
import {React, useState} from 'react'

function Announce() {
    const[announceStyle, setAnnounceStyle] = useState('bg-[#32B94D] font-bold text-white flex item-center justify-center')
    const handleClose = ()=>{
        setAnnounceStyle(announceStyle + " hidden")
    }
  return (

    <div className={announceStyle}>
        <h1> 20% Off in this product only </h1>
        <Close className='cursor-pointer bg-red-600 ml-1 rounded-full' onClick={handleClose}/>
    </div>
  )
}

export default Announce