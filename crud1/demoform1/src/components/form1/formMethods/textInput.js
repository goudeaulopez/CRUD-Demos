import React from 'react'
import ErrorHelper from '../validation/errorHelper'

const TextInput = props =>{
    const classLabel = `${props.meta.error && props.meta.touched ? 'text text-danger': 'text text-primary'}` 
    const classInput = `${props.meta.error && props.meta.touched ? 'border border-danger':'border border-primary'}`
    return(
        <div className="field">
             <label className={classLabel}>{props.label}</label>
             <input className={classInput} {...props.input} />
           {ErrorHelper(props.meta)}
            
        </div>
    )
}
export default TextInput