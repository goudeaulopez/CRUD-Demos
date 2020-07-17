const validate = values => {
    const error={}
    if(!values.firstname){
        error.firstname="firstname is require"
    }
    if(!values.lastname){
        error.lastname="lastname is required"
    }
    if(!values.email){
        error.email = "no email added"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
        error.email = "enter a valid email address"
    }
    if(!values.phone){
        error.phone = "no phone added"
    }
    else if(!/^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/i.test(values.phone)){
        error.phone = "enter a valid phone number"
    }
    
    if(!values.appointment){
        error.appointment="xxxxxxx"
    }
    if(!values.description){
        error.description="Description is required"
    }
    else if(values.description.length < 70 && values.description.length > 100 ){
        error.description="description required 50 characters min"
    }
    return error
}
export default validate