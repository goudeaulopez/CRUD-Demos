import React from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import {listAction} from '../../actions'

import ListItem from './listItem';


class List extends React.Component{
    componentDidMount(){
        this.props.listAction();
       
    }
    renderList = () => {

        if(this.props.list.length === 0){
            return <div style={{textAlign:'center',paddingTop:'10%'}}>no data added</div>
        }

        return this.props.list.map(
            elementList => {
                // return <div onClick={()=>history.push(`/form1/${elementList.id}`)} key={elementList.id}>{elementList.firstname}</div>
                return <ListItem elementList={elementList} key={elementList.id}/>
            }
        )
    }
    render(){
        return<div>{this.renderList()}</div>
    }
}
const  mapStateToProps = state =>{
    return{list: Object.values(state.myreducer)}
}
export default connect(mapStateToProps, {listAction})(List)
