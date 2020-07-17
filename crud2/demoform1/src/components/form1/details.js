import React from 'react'
import {connect} from 'react-redux'
import {detailsAction} from '../../actions'

class Details extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params.id)
    }
    render(){
        return<div>Display</div>
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {selected: state.myreducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{detailsAction})(Details)

