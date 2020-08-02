import React from 'react'
import history from '../../history'

const ListItem = props => {
    const image = `http://localhost:52638/${props.item.profileImage}`
    return(
        <div style={{display:'flex'}} onClick={()=> history.push(`/form1/${props.item.id}`)}>
            <img src={image} style={{width:100}} />
            <h3>{props.item.firstname} {props.item.lastname}</h3>
        </div>
    )
}
export default ListItem

