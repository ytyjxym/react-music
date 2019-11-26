import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducer from "../../store/reducer";
import state from '../../store/state'

const store = createStore(reducer,state,applyMiddleware(thunk))
export default store