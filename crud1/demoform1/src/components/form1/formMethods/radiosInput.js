import React from 'react'
import ErrorHelper from '../validation/errorHelper'

const RadioInputs = props => {
    const classLabel = `${props.meta.error && props.meta.touched ? 'text text-danger': 'text text-primary'}` 
    return(
        <div className="field">
             <div className="ui radio checkbox ml-2">
                <input  {...props.input}  type="radio"/>
                <label className={classLabel}>{props.label}</label>
                <div style={{display:'none'}}>{ErrorHelper(props.meta)}</div>
             </div>
        </div>
     )
}
export default RadioInputs