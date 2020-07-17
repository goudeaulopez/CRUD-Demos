import _ from 'lodash'

import {
 LIST_ACTION,
 CREATE_ACTION,
 DETAILS_ACTION,
 DELETE_ACTION,
 UPDATE_ACTION
}
from '../actions/types'

export default (state={}, action)=>{

    switch(action.type){
        case LIST_ACTION:
            return {...state, ..._.mapKeys(action.payload,'id')}
        case CREATE_ACTION:
            return {...state, [action.payload.id]:action.payload}
        case UPDATE_ACTION:
            return {...state, [ action.payload.id]:action.payload}
        case DETAILS_ACTION:
            return {...state, [ action.payload.id]:action.payload }
        case DELETE_ACTION:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
