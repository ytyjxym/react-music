import React from 'react';
import './Loading.css';
import style from './Loading.module.css';

import img from '../../assets/img/screen_1536x2048.png'
export default class Loading extends React.Component{

    render = ()=>{
        return(
            <img src={img} alt={''} className={'LoadingBg'}/>
        )
    }
}