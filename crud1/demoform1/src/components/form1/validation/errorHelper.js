import React from 'react'

const ErrorHelper = props => {
    if(props.error && props.touched){
        return(
            <div>
                <div className='text text-danger'>{props.error}</div>
            </div>
        )
    }
}
export default ErrorHelper