import React from 'react'
import history from '../../history'
import '../../styles/listItem.css'

const ListItem = props => {
    return(
        <div>
            <div className="ui grid container" id="listitem" onClick={()=> history.push(`/form1/${props.elementList.id}`)}>
            <div className="eight wide column"> {props.elementList.firstname+' '+props.elementList.lastname}</div>
            <div className="eight wide column">{props.elementList.appointment}</div>
        </div>
        <div className="ui grid container" id="listitembs" onClick={()=> history.push(`/form1/${props.elementList.id}`)}>
            <div className="four wide column"> {props.elementList.firstname+' '+props.elementList.lastname}</div>
            <div className="four wide column">{props.elementList.email}</div>
            <div className="four wide column">{props.elementList.phone}</div>
            <div className="four wide column">{props.elementList.appointment}</div>
        </div>
        </div>
    )
}
export default ListItem