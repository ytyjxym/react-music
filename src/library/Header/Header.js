import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
// import {update} from '../../store/actions'
import store from "../../plugins/redux";
class Header extends React.Component{

    render = ()=>{
        return(
            <div>
                <NavBar
                    style={{background:'#fff',color:'#000',position:'fixed',left:0,top:0,right:0,zIndex:10000}}
                    mode="black"
                    leftContent={
                        this.props.isHome ? <Icon key="1" type="ellipsis" onClick={()=>this.viewDrawer()}/> :
                        <Icon key="1" type="left" onClick={()=>this.goback()}/>
                    }
                    rightContent={
                        this.props.isSearch || <Icon key="1" type="search" onClick={()=>this.showSearch()} />
                    }
                >云音乐</NavBar>
                <NavBar
                    style={{background:'none',color:'#000'}}
                ></NavBar>
            </div>
        )
    }
    viewDrawer = ()=>{
        store.dispatch({type:'VIEW_DRAWER'})
    }
    showSearch = async ()=>{
        await store.dispatch({type:'CHANGE_LISTTYPE',payload:{listType:'search',listName:'搜索结果'}})
        await store.dispatch({type:'DEL_SONGLIST'})
        this.props.history.push('/Search')
    }
    goback = () => {
        // console.log(this.props.history)
        this.props.history.push('/home')

        // this.props.history.go(-1)
    }
}


const mapStateToProps = state => {
    return{
        isHome: state.isHome,
        isSearch: state.isSearch
    }
}
// const mapDispatchToProps = dispatch => {
//     return{
//         showDrawer:()=> dispatch(update({
//
//         }))
//     }
// }

export default withRouter(connect(mapStateToProps,null)(Header))
