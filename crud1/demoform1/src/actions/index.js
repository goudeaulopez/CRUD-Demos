import serverDemo1 from '../apis/serverDemo1'
import history from '../history'

import {
 CREATE_ACTION,
 DELETE_ACTION,
 DETAILS_ACTION,
 UPDATE_ACTION,
 LIST_ACTION
}
from './types'


export const listAction = () => {
    return async dispatch => {
        const response = await serverDemo1.get('api/form1s')
        dispatch({
            type: LIST_ACTION,
            payload: response.data
        })
    }
}
export const createAction = formValue => {
   // console.log(formValue)
    return async dispatch =>{
        const response =   await serverDemo1.post('api/form1s',formValue);
        
        dispatch({
            type: CREATE_ACTION ,
            payload:response.data
        })
        
        history.push('/')
    }
}
export const updateAction = (id, formValue) =>{
    return async dispatch => {
        const response = await serverDemo1.put(`api/form1s/${id}`, formValue);
        dispatch({
            type: UPDATE_ACTION,
            payload: response.data
        })
        history.push('/')
    }
}
export const detailsAction = id =>{
    return async dispatch=>{
        const response = await serverDemo1.get(`api/form1s/${id}`)
 
        dispatch({
            type: DETAILS_ACTION,
            payload: response.data
        })
    }
}
export const deleteAction = id =>{
    return async dispatch => {
         await serverDemo1.delete(`api/form1s/${id}`)
        dispatch({
            type: DELETE_ACTION,
            payload: id
        })
        history.push('/')
    }
}