import React from 'react'
import {reduxForm} from 'redux-form'
import ContactDetails from './contactdetails'
import CallingTimes from './callingtimes'
import Description from './descriptions'
import PersonalDetails from './personaldetails'


class Form extends React.Component{
    state={number:1}
    nextPage = () => {
       this.setState({number : this.state.number + 1})
    }
    previosPage = () =>{
        this.setState({number : this.state.number - 1})
    }
    onSubmit = myvalues=> {
        this.props.onSubmit(myvalues)
       
    }
    renderForms(){
        switch(this.state.number){
            case 2:
                return <ContactDetails onSubmit={this.nextPage} previosPage={this.previosPage}/>
                case 3:
                       return <CallingTimes onSubmit={this.nextPage} previosPage={this.previosPage}/>
                    case 4:
                           return <Description onSubmit={this.onSubmit} previosPage={this.previosPage}/>
                    default:
                           return <PersonalDetails onSubmit={this.nextPage}/>
                    
        }

    }
    render(){
        return(
            <div>
                {this.renderForms()}
            </div>
        )
    }
}
export default reduxForm({
 form: 'form1',
 
}) (Form)