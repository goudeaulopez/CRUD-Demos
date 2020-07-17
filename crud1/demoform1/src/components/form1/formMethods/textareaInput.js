import React from 'react'
import ErrorHelper from '../validation/errorHelper'

const TextAreaInput = props =>{
    const classLabel = `${props.meta.error && props.meta.touched ? 'text text-danger': 'text text-primary'}` 
    const classInput = `${props.meta.error && props.meta.touched ? 'border border-danger':'border border-primary'}`
    return(
        <div className="field">
             <h3 className={classLabel}>What is your story</h3> 
             <textarea className={classInput} {...props.input}/>
             {ErrorHelper(props.meta)}
        </div>
     )
}
export default TextAreaInput