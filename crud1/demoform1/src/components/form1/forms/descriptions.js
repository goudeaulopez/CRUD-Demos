import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import TextAreaInput from '../formMethods/textareaInput'
import validate from '../validation/validate'
import '../../../styles/personalDetail.css'

class Description extends React.Component{
    render(){
        return(
            <div className="form1">
                <form className="ui form" onSubmit={this.props.handleSubmit}>
                <Field
                    name="description"
                    placeholder=" Please say Something"
                    component={TextAreaInput}
                 />
                    <button className="btn btn-primary mr-2 mt-3" onClick={()=>this.props.previosPage()}>previos</button>
                    <button className="btn btn-primary mt-3" type="submit" onClick={reset}>Submit</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
 form: 'form1',
 destroyOnUnmount: false,
 validate
}) (Description)