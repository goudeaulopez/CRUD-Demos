import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {listAction} from '../../actions'


class List extends React.Component{
    componentDidMount(){
        this.props.listAction();
    }
    render(){
         return<div style={{fontSize:'16px', textAlign:'center'}}>List</div>
    }
}
const  mapStateToProps = state =>{
    return{list: Object.values(state.myreducer)}
}
export default connect(mapStateToProps, {listAction})(List)
