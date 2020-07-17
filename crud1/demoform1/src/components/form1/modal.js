import ReactDOM from 'react-dom'
import React from 'react'
import '../../styles/modal.css'

const Modal = props =>{
    return  ReactDOM.createPortal(
        <div onClick={props.onDismiss} style={{opacity:'0.6'}}  className="ui dimmer modals visible active" >
            <div onClick={(e)=> e.stopPropagation()}  className="ui standard modal visible active" id="modal1" >
            <div className="header">{props.title}</div>
                <div className="content" >
                   {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
}
export default Modal