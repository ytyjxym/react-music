import React from 'react';
import './Loading.css';

export default class Loading extends React.Component{

    render = ()=>{
        return(
            <>
                <div className={'loaders__bg_div'}>

                </div>
                <div className="loaders__div">
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
            </>

        )
    }
}
