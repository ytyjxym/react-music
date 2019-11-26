import React from 'react';
import './Loading.css';

export default class Loading extends React.Component{

    render = ()=>{
        return(
            <div className="loaders">
            <div className="loader">
                <div className="loader-inner ball-spin-fade-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>


        )
    }
}