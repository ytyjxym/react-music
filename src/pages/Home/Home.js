import React from 'react';
import Swipe from "../../component/Swiper/Swiper";
import Grid from "../../component/Grid/Grid";
// import {Route,Switch} from 'react-router-dom';
// import PlayList from "../PlayList/Playlist";

export default class Home extends React.Component{
    render = ()=>{
        return(
            <div>
                <Swipe/>
                <main>
                    <Grid/>
                </main>
            </div>
        )
    }
}
