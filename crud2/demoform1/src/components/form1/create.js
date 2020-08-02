import React from 'react'
import {connect} from 'react-redux'
import {createAction} from '../../actions'
import FormProduct from './form'
import history from '../../history'


class Create extends React.Component{
    onSubmit = (form) => {
      this.props.createAction(form)
    }
    render(){
        return(
            <div>
               <FormProduct onSubmit={this.onSubmit}/>
               <button onClick={()=>history.push('/')}>cancel</button>

            </div>
        )
    }
}
export default connect(null, {createAction})(Create)