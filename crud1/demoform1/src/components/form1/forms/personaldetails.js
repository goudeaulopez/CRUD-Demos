import React from 'react'
import TextInput from '../formMethods/textInput'
import {Field,reduxForm} from 'redux-form'
import validate from '../validation/validate'
import '../../../styles/personalDetail.css'

class PersonalDetails extends React.Component{
  render(){
        return(
            <div className="form1">
                <form className="ui form" onSubmit={this.props.handleSubmit}>
                    <h3 className="text text-primary">PersonalDetails</h3>
                    <Field name="firstname" label="firstname" component={TextInput}/>
                    <Field name="lastname" label="lastname" component={TextInput}/>
                    <button className="btn btn-primary" type="submit">next</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'form1',
    destroyOnUnmount: false,
    validate
})(PersonalDetails)
