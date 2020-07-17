import React from 'react'
import {connect} from 'react-redux'
import {createAction} from '../../actions'
import Form from './forms/form'

class Create extends React.Component{
    onSubmit = form =>{
          this.props.createAction(form)
    }
    render(){
        return(
            <div>
                <Form onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
export default connect(null, {createAction})(Create)