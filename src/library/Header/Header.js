import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
class Header extends React.Component{

    render = ()=>{
        return(
            <div>
                <NavBar
                    style={{background:'#fff',color:'#000',position:'fixed',left:0,top:0,right:0,zIndex:10000}}
                    mode="black"
                    leftContent={
                        this.props.isHome ? <Icon key="1" type="ellipsis" onClick={()=>this.showDrawer()}/> :
                        <Icon key="1" type="left" onClick={()=>this.goback()}/>
                    }
                    rightContent={[
                        <Icon key="1" type="search" onClick={()=>this.showSearch()} />,
                    ]}
                >云音乐</NavBar>
                <NavBar
                    style={{background:'none',color:'#000'}}
                ></NavBar>
            </div>
        )
    }
    showDrawer = ()=>{
        console.log(1)
    }
    showSearch = ()=>{
        console.log(2)
    }
    goback = () => {
        this.props.history.go(-1)
    }
}


const mapStateToProps = (state) => {
    return{
        isHome: state.isHome
    }
}

export default withRouter(connect(mapStateToProps,null)(Header))
