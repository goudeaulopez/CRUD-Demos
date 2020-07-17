import React from 'react'
import {connect} from 'react-redux'
import {detailsAction} from '../../actions'
import {Link} from 'react-router-dom'
import '../../styles/details.css'

const details = "ui secondary center aligned segment"
class Details extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }
    renderButtons = () => {
        return(
           <div>
               <Link className="btn btn-primary mr-1" to={`/form1/update/${this.props.selected.id}`}>Update</Link>
               <Link className="btn btn-danger ml-1" to={`/form1/delete/${this.props.selected.id}`}>Delete</Link>
           </div>
        )
    }

    render(){
        if(!this.props.selected){
            return <div>Loading</div>
        }
        return(
            <div className="display">
           
            <div className="ui piled segments">
               <div className="ui secondary center aligned segment" style={{fontSize:'16px',paddingLeft:'5%'}}>Details</div>
               <div className={details}> {'Email:'+this.props.selected.email}</div>
               <div className={details}>{'Fullname:'+this.props.selected.firstname+' '+this.props.selected.lastname}</div>
               <div className={details}>{'Mobile: '+this.props.selected.phone}</div>
               <div className={details}>{'Calling time:'+this.props.selected.appointments}</div>
               <div className={details}>Description:</div>
              <div className="ui secondary center aligned segment">{this.props.selected.description}</div>
               <div  className={details}>{this.renderButtons()}</div>
           </div>
        </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{detailsAction})(Details)

