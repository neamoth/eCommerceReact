import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import './navbar.css'

function Navbar() {
  const style = "cursor-pointer text-[14px] ml-[25px] mr-[20px]"
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
      <div className='wapper flex justify-between items-center pl-[20px] pt-[10px] pb-[10px]'>
        {/* left div */}
        <div className='left flex flex-1 items-center'>

          {/* {language div} */}
          <div className='language cursor-pointer text-[16px]'>
            En
          </div>
          {/* {search div} */}
          <div className='searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-1 p-2 focus-within:border-[#32B94D] transition-all'>
            <input className="input outline-none text-gray-800" type='text' />
            <Search className='' style={{ textSize: '16px' }} />
          </div>
        </div>
        {/* {Logo} */}
        <div className='logo flex-1 text-center'>
          Sharpshooter
        </div>
        {/* {left div} */}
        <div className='right flex flex-1 items-center justify-end'>

          <div className={style}>Register</div>
          <div className={style}>Login</div>
          <div className={style}>
            <Badge badgeContent={2} color='primary'>
              <ShoppingCartOutlined />
            </Badge>

          </div>
        </div>
      </div>
      {/* <ui className='list cursor-pointer space-x-3.5 mr-[7px] '>
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>About us</li>
            </ui> */}
    </div>
  )
}



export default Navbar