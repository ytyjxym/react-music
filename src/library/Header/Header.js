import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
export default class Header extends React.Component{
    render = ()=>{
        return(
                <NavBar
                    style={{background:'#000'}}
                    mode="black"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >未知用户</NavBar>
        )
    }
}
