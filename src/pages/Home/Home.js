import React from 'react';
import Swipe from "../../component/Swiper/Swiper";
import Grid from "../../component/Grid/Grid";
// import { Drawer, List} from 'antd-mobile';
import {connect} from "react-redux";
// import Search from "../Search/Search";
// import {Route,Switch} from 'react-router-dom';
// import PlayList from "../PlayList/Playlist";
// import store from "../../plugins/redux";
class Home extends React.Component{

    render = ()=>{
        // const sidebar = (<List>
        //     {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        //         if (index === 0) {
        //             return (<List.Item key={index}
        //                                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        //                                multipleLine
        //             ></List.Item>);
        //         }
        //         return (<List.Item key={index}
        //                            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        //         >{index}</List.Item>);
        //     })}
        // </List>);
        return(
            <div>
                {/*<Drawer*/}
                {/*    className="my-drawer"*/}
                {/*    style={{ minHeight: '100%',position:'static',display:'none'}}*/}
                {/*    enableDragHandle*/}
                {/*    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: '.42rem' }}*/}
                {/*    sidebar={sidebar}*/}
                {/*    // dragToggleDistance={80}*/}
                {/*    open={this.props.bDrawer}*/}
                {/*>*/}
                    <Swipe/>
                    <main>
                        <Grid/>
                    </main>
                {/*</Drawer>*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        bDrawer: state.bDrawer,
    }
}
// const mapDispatchToProps = dispatch => {
//     return{
//         showDrawer:()=> dispatch(update({
//
//         }))
//     }
// }

export default connect(mapStateToProps,null)(Home)
