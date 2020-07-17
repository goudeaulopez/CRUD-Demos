import React from 'react'
import {Field, reduxForm} from 'redux-form'
import RadioInputs from '../formMethods/radiosInput'
import validate from '../validation/validate'
import '../../../styles/personalDetail.css'


class CallingTimes extends React.Component{
   render(){
        return(
            <div className="form1">
                <form className="ui form" onSubmit={this.props.handleSubmit}>
                <div className="grouped fields">
                    <h3 className="text text-primary">CallingTimes</h3>
                    <Field name="appointment" component={RadioInputs} label="Morning" value="morning"  type="radio"/>
                    <Field name="appointment" component={RadioInputs} label="Afternoon" value="afternoon"  type="radio"/>
                    <Field name="appointment" component={RadioInputs} label="Evening" value="evening"  type="radio"/>
                    <button className="btn btn-primary mr-2 mt-4" onClick={()=>this.props.previosPage()}>previos</button>
                    <button type="submit" className="btn btn-primary mt-4">next</button>
                </div>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form:'form1',
    destroyOnUnmount: false,
    validate
}) (CallingTimes)