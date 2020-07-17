import React from 'react' 
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <div className="ui pointing secondary menu">
                <Link className=" pt-3 pl-3" style={{fontSize:'16px', fontWeight:'bold'}} to="/">Crud Demo</Link>
                <div className="right menu">
                   <Link className="ui mini button primary mt-2 mb-2  mr-4" to="/form1/create">Create  Record</Link>
                </div>
        </div>
    )
}
export default Header
