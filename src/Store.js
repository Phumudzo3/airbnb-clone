import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {listingListReducer } from '../src/reducers/ListingReducer';
import {modalReducer } from '../src/reducers/ModalReducer';
import { userLoginReducer } from './reducers/UserReducer';




const reducer =combineReducers({listinglist:listingListReducer,modal: modalReducer,
userLogin:userLoginReducer});
const userInfoFromLS=localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem('userInfo')):null;
const initialState={
    userLogin:{userInfo:userInfoFromLS},
};
const Middleware =[thunk];
const Store= createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...Middleware))
);
export default Store;