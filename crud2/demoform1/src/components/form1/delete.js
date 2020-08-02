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
    renderButton=()=>{
      if(!this.props.selected){
          return <div></div>
      }
      return(
          <React.Fragment>
              <button onClick={()=>this.props.deleteAction(this.props.match.params.id)}>delete</button>
              <Link to={`/form1/${this.props.selected.id}`}>cancel</Link>
          </React.Fragment>
      )
    }
    renderDescription=()=>{
       if(!this.props.selected){
        return 'Are you sure you want to delete'
       }
       return `Are you sure you want to delete ${this.props.selected.firstname}`
    }
    render(){
        return (
                <div>
                    <Modal 
                        onDismiss={()=> history.push(`/forms/delete/${this.props.selected.id}`)}
                        content={this.renderDescription()}
                        actions={this.renderButton()}
                        title="Delete Record"
                    />
                </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{deleteAction,detailsAction})(Delete)