import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {detailsAction, updateAction} from '../../actions'
import FormProduct from './form'
import history from '../../history'

class Update extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
    }
    onSubmit = (form) => {
        this.props.updateAction(this.props.match.params.id,form)
      }
    render(){
        
        if(!this.props.selected){
            return <div>loading...</div>
        }
        return <div><FormProduct
                        onSubmit={this.onSubmit} 
                        initialValues={
                        _.pick(this.props.selected,'firstname','lastname','image')}
                        selected={this.props.selected}
                    />
                     <button onClick={()=>history.push('/')}>cancel</button>
                </div>
    }
}
const mapStateToProps = (state, ownProps)=>{
    return{selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{detailsAction,updateAction})(Update)