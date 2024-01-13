import { OPEN_MODAL } from "../components/ModalTypes";

const initalState ={openClose:"closed",content:""};


export const modalReducer =(state=initalState,action)=>{
    if(action.type === OPEN_MODAL){
        return action.payload;
    }
    return state
}