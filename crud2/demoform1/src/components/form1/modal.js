import ReactDOM from 'react-dom'
import React from 'react'

const Modal = props =>{
    return  ReactDOM.createPortal(
        <div onClick={()=> props.onDismiss}>
            <div onClick={(e)=> e.stopPropagation()}>
                delete 
            </div>
        </div>,
        document.querySelector("#modal")
    )
}
export default Modal