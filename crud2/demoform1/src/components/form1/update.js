import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {detailsAction, updateAction} from '../../actions'

class Update extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
    }
    render(){
        return<div>Update</div>
    }
}
const mapStateToProps = (state, ownProps)=>{
    return{selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{detailsAction,updateAction})(Update)