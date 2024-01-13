import React from 'react'
import "./modal.css";
import { useSelector,useDispatch } from 'react-redux';
import { openModal } from '../actions/ModalAction';
import { Login } from './Login';

export const Modal = () => {
  const dispatch =useDispatch();
  const modal =useSelector(state=>state.modal);
  const {openClose,content}= modal;
  let modalInlineStyle;
  if (openClose==='open') {
      modalInlineStyle={
          display:"Block",
          
      };}
      else{
          modalInlineStyle={
              display:"none",
            }
          }
          
  const closeModalHander =()=>{
dispatch(openModal('close',""))
  }
return (
  <div className='site-modal' style={modalInlineStyle}>
<div className='modal-content'>
  <div className='col right'>
      <span onClick={closeModalHander} className=' close'>
          &times; 
      </span>
  </div>
  <div>{content}</div>
  <Login/>
  </div>


  </div>
)

}
