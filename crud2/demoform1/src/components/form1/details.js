import React from 'react'
import {connect} from 'react-redux'
import {detailsAction} from '../../actions'
import history from '../../history'

class Details extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }
    render(){
        if(this.props.selected == null){
            return <div>no data</div>
        }
        return(
            <div>
                <button onClick={()=>history.push(`/form1/update/${this.props.selected.id}`)}>update</button>
                <button onClick={()=>history.push(`/form1/delete/${this.props.selected.id}`)}>delete</button>
                <img src={`http://localhost:52638/${this.props.selected.profileImage}`} style={{width:200}}/>
                <h2>{this.props.selected.firstname}</h2>
                <h2>{this.props.selected.lastname}</h2>
                <button onClick={()=> history.push('/')}>back</button>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{detailsAction})(Details)

