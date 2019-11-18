import React from 'react';
import {Route} from "react-router-dom";
import App from '../../library/APP/App'
import Loading from '../../library/Loading/Loading'

export default class AppAuth extends React.Component{
    state={
        text:{}
    }
    static getDerivedStateFromProps(nextProps){
        console.log(1,nextProps);
        return null
    };
    componentDidMount() {
        fetch('/1.json')
            .then(res=>res.json())
            .then(data=>{
                setTimeout(()=>{
                    this.setState({text:data})
                },1000)
            })
    }
    render = ()=>{
        return(
            this.state.text[0] ? <Route component={App}/> : <Route component={Loading} />
        )
    }
}