import { List } from 'antd-mobile';
import React from 'react';
import {update} from "../../store/actions";
import {connect} from "react-redux";
const Item = List.Item;
const Brief = Item.Brief;
class ListEX extends React.Component {
    componentDidMount() {
        if(this.props.SongList.length === 0) this.props.getSongList(this.props.location.search.split('?')[1].split('=')[1])
    }

    render() {
        return (<div>
            <List renderHeader={() => <div style={{color:'#000',fontSize:'.26rem'}}>当前歌单</div>} className="my-list" >
                {
                    this.props.SongList.map((item,index)=>(
                        <Item
                            // thumb={item.al.picUrl}
                            key={index}
                            multipleLine
                            onClick={async (el) => {
                                // console.log(item.al.id)
                                await this.props.getSongInfo(item.id)
                                await this.props.getSong(item.id)
                                this.props.viewAudio()
                                this.props.resetAudio()
                            }}
                            platform="cross"
                        >
                            {item.al.name}
                            <Brief>{item.ar[0].name}</Brief>
                        </Item>
                    ))
                }
            </List>
        </div>);
    }
}

let mapStateToProps = (state) => {
    return {
        SongList:state.SongList,
        nowAudio:state.nowAudio,
    }
}
let mapDispatchToProps = dispatch => {
    return {
        getSong:(id)=> dispatch(update({
                api: `/song/url?id=${id}`,
                type:'UPDATE_AUDIO'
            })),
        getSongList:(id)=>dispatch(update({
            api: `/playlist/detail?id=${id}`,
            type:'UPDATE_SONGLIST'
        })),
        getSongInfo:(id)=>dispatch(update({
            api:`/song/detail?ids=${id}`,
            type:'UPDATE_SONGINFO'
        })),
        viewAudio:()=>dispatch({type:'VIEW_AUDIO',payload:true}),
        resetAudio:()=>dispatch({type:'RESET_AUDIO',payload:false}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListEX)