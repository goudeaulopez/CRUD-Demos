import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import myreducers from './myreducers'

export default combineReducers({
   form: formReducer,
   myreducer:myreducers
})