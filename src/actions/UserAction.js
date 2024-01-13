import axios from 'axios';
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT} from '../types/UserType';
export const login=(email,password)=>async(dispatch)=>{
try{
dispatch({
    type:USER_LOGIN_REQUEST,
})

const config={
    headers:{
'Content-Type': 'application/json',

    },
};
const {data}=await axios.post('http://[::1]:4000/login',{email,password},config);
localStorage.setItem("userinfo",JSON.stringify(data));
dispatch({type:USER_LOGIN_SUCCESS,payload:data});

}catch(error){
dispatch({type:USER_LOGIN_FAIL,payload:error.response && error.response.data.message?
error.response.data.message
:error.message,

})
}
};
export const logout=()=>async(dispatch)=> {

};