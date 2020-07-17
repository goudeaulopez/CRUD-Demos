import React from 'react'
import {connect} from 'react-redux'
import history from '../../history'
import {detailsAction, deleteAction} from '../../actions'
import Modal from './modal'
import {Link} from 'react-router-dom'

class Delete extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
    }
    renderButton = () => {
        if(!this.props.selected){
            return<div></div>
        }
        return(
            <React.Fragment>
                <button className="ui button negative" onClick={()=>{this.props.deleteAction(this.props.match.params.id)}}>Delete</button>
                <Link className="ui button" to={`/form1/${this.props.selected.id}`}>Cancel</Link>
            </React.Fragment>
        )
    }
    renderDescription(){
       if(!this.props.selected){
           return 'Are you sure you want to delete'
       }
       else{
           return `Are you sure, you want to delete ${this.props.selected.firstname}`
       }
    }
    render(){
        return <Modal 
                    onDismiss={()=> history.push(`/form1/${this.props.selected.id}`)}
                    content={this.renderDescription()}
                    actions={this.renderButton()}
                    title="Delete Record"
                />
                
       
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{deleteAction,detailsAction})(Delete)