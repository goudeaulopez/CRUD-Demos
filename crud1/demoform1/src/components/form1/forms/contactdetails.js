import React from 'react'
import TextInput from '../formMethods/textInput'
import {Field,reduxForm} from 'redux-form'
import validate from '../validation/validate'
import '../../../styles/personalDetail.css'

class ContactDetails extends React.Component{
   render(){
        return(
            <div className="form1">
                <form className="ui form" onSubmit={this.props.handleSubmit}>
                    <h3 className="text text-primary">ContactDetails</h3>
                    <Field name="email" label="Email Address" component={TextInput}/>
                    <Field name="phone" label="Mobile Number" component={TextInput}/>
                    <button  className="btn btn-primary mr-2" onClick={()=>this.props.previosPage()}>previos</button>
                    <button  type="submit" className="btn btn-primary">next</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'form1',
    destroyOnUnmount: false,
    validate
})(ContactDetails)