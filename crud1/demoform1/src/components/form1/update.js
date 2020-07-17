import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {detailsAction, updateAction} from '../../actions'
import Form from './forms/form'

class Update extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
    }
    onSubmit = form => {
        this.props.updateAction(this.props.match.params.id,form)
    }
    render(){
    if(!this.props.selected){
        return <div>loading...</div>
    }
    return <div><Form 
                    onSubmit={this.onSubmit} 
                    initialValues={
                    _.pick(this.props.selected,'firstname','lastname','email','phone','appointment','description')}
                />
            </div>
    }
}
const mapStateToProps = (state, ownProps)=>{
    return{selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{detailsAction,updateAction})(Update)