import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {listAction} from '../../actions'
import ListItem from './listItem'

class List extends React.Component{
    componentDidMount(){
        this.props.listAction();
        console.log(this.props.list)
    }
   display = () => {
    
    if(this.props.list.length === 0){
        return <div style={{textAlign:'center',paddingTop:'10%'}}>no data added</div>
    }
       return this.props.list.map(
           item => { 
           return <ListItem item={item} key={item.id}/>
           }
       )
   }
  render(){
         return(
                <div>
                    <Link to="/form1/create">create</Link>
                    {this.display()}
                </div>
                )
    }
}
const  mapStateToProps = state =>{
    return{list: Object.values(state.myreducer)}
}
export default connect(mapStateToProps, {listAction})(List)
//<img key={item.id} src={item.ProfileImage} style={{width:100}}/>