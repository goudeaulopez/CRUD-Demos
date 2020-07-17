import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import Create from './form1/create'
import Delete from './form1/delete'
import Update from './form1/update'
import List from './form1/list'
import Details from './form1/details'
import history from '../history'
import Header from './header'
import '../styles/app.css'

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Router history={history}>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={List}/>
                        <Route path="/form1/create" component={Create}/>
                        <Route path="/form1/delete/:id" component={Delete}/>
                        <Route path="/form1/update/:id" component={Update}/>
                        <Route path="/form1/:id" component={Details}/>
                    </Switch>
                </Router>

            </div>
        )
    }
}
export default App


/*
<Router history={history}>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={List}/>
                        <Route path="/form1/create" component={Create}/>
                        <Route path="/form1/delete/:id" component={Delete}/>
                        <Route path="/form1/update/:id" component={Update}/>
                        <Route path="/form1/:id" component={Details}/>
                    </Switch>
                </Router>



*/