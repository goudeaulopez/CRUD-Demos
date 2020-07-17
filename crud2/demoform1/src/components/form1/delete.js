import React from 'react'
import {connect} from 'react-redux'
import history from '../../history'
import {detailsAction, deleteAction} from '../../actions'
import Modal from './modal'

class Delete extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
    }
    render(){
        return (
                <div>
                    <Modal onDismiss={()=> history.push('/')}/>
                </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{deleteAction,detailsAction})(Delete)