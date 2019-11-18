import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from '../../views/Home'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
export default class App extends React.Component{
    render = ()=>{
        return(
            <div>
                <Header></Header>
                <main>
                    <Switch>
                        <Route
                            path={'/home'}
                            component={Home}
                        >
                        </Route>
                    </Switch>
                </main>
                <Footer/>
        </div>
        )
    }
}
