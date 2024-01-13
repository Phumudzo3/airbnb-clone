import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Avatar from '@mui/material/Avatar';
import {openModal} from '../../actions/ModalAction';
import { Login } from '@mui/icons-material';


export const Header = () => {
   const dispatch =useDispatch();
const userLogin=useSelector(state=>state.userLogin)
const {userInfo}=userLogin
  const openModalHandler=()=>{
    dispatch(openModal("open",<Login/>))
    
  }
  return (
    <div className='header'>
      <img src='https://www.shutterstock.com/image-vector/vinnytsia-ukraine-june-23-2023-600nw-2321769253.jpg' alt='logo' className='header_logo' />

      <div className='header_center'>
        <input type='text' />
        <SearchIcon />
      </div>

      <div className='header_right'>
        <p>Airbnb your home</p>
        <LanguageIcon />
       
        <div className="profile">
        <div className='dropdown'>
        <DehazeIcon className='dropbtn' />
        <div className='dropdown-content'>
          {userInfo?(
          <>
          <span>Account</span>
          <span>logout</span>
          </>):
          (<>
           <span>Sign Up</span>
           <span onClick={openModalHandler}>Log In</span>
          </>
          
          )}
          <span>Help</span>
        </div>
          </div>
       
          <span className='btnClick' onClick ={openModalHandler}></span>
          <Avatar />
        </div>


      </div>
    </div>
  )
}
