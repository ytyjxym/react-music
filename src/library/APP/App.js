import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import axios from '../../plugins/axios'
import {connect} from "react-redux";
import Error404 from "../../pages/Error404/Error404";
import Loading from "../Loading/Loading";
import List from "../List/List";
import store from "../../plugins/redux";
import Search from "../../pages/Search/Search";
// import Swiper from '../../component/Swiper/Swiper'
// import Grid from "../../component/Grid/Grid";
// import ListExample from "../List/List";
class App extends React.Component{
    // constructor(){
    //     super();
    //     // axios(`${axios.baseUrl}/top/song`,{
    //     //      withCredentials: true
    //     // })
    //     //     .then(data=>{
    //     //         console.log(data)
    //     //     })
    // }
    state={

    }
    componentDidMount() {
        if(window.localStorage.getItem('xymSongList')){
            store.dispatch({type:"INIT_MYLIST",payload:JSON.parse(window.localStorage.getItem('xymSongList'))})
        }
    }
    static getDerivedStateFromProps(nextProps){
        let path = nextProps.location.pathname
        if(/home/.test(path)){
            store.dispatch({type:'IS_HOME',payload:true})
        }else{
            store.dispatch({type:'IS_HOME',payload:false})
        }
        if(!(/Search/.test(path))){
            store.dispatch({type:'CLEAR_SEARCH'})
        }
        return null
    }
    render = ()=>{
        return(
            <div>
                {this.props.showLoading && <Loading/>}
                <Header></Header>
                <Switch>
                    <Route
                            path={'/home'}
                            component={Home}
                        >
                    </Route>
                    <Route
                        path={'/list'}
                        component={List}
                    >
                    </Route>
                    <Route
                        path={'/Search'}
                        component={Search}
                    >
                    </Route>
                    <Redirect
                        exact
                        path={'/'}
                        to={'/home'}
                        // component={Home}
                    />
                    <Route
                        component={Error404}
                    >
                    </Route>
                </Switch>
                <Footer></Footer>
        </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        showLoading: state.showLoading
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
