import React, { useState } from 'react'
import './banner.css';
import { Button } from '@mui/material/';
import { Search } from './Search';
export const Banner = () => {
const [showSearch,setShowSearch] =useState(false);


  return (
    <div className='banner'> 
    <div className='banner_search'>
        {showSearch && <Search/>}
<Button onClick={()=>setShowSearch(!showSearch)} className='banner_search_btn' varient="outlined">{showSearch?"Hide" : "Search Dates"}

</Button>
    </div>
    <div className='banner_info'>
    <h1> Get out and stretch youe imagination</h1>
    <h5>
        paln a different kind of a gateway to uncover the hidden gems near you.
    </h5>
    <Button varient ="outline">Explore Near</Button>
    </div>
   
    </div>
  )
}
