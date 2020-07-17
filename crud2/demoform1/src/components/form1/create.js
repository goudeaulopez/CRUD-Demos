import React from 'react'
import {connect} from 'react-redux'
import {createAction} from '../../actions'

class Create extends React.Component{
    
    render(){
        return(
            <div>
                Create template
            </div>
        )
    }
}
export default connect(null, {createAction})(Create)