import { List } from 'antd-mobile';
import React from 'react';
import {update} from "../../store/actions";
import {connect} from "react-redux";
// import store from "../../plugins/redux";
const Item = List.Item;
const Brief = Item.Brief;
class ListEX extends React.Component {
    componentDidMount() {
        // console.log(this.props.location.search)
        if(this.props.listType === 'songList' && this.props.SongList.length === 0 && this.props.location) this.props.getSongList(this.props.location.search.split('?')[1].split('=')[1])
    }
    render() {
        return (<div>
            <List renderHeader={() => <div style={{color:'#000',fontSize:'.26rem'}}>{this.props.listName}</div>} className="my-list" >

                {
                    this.props.listType === 'songList' &&
                    this.props.SongList.map((item,index)=>(
                        <Item
                            // thumb={item.al.picUrl}
                            key={index}
                            multipleLine
                            onClick={async (el) => {
                                if(this.props.listType !== 'myList') this.props.updateMyList(item)
                                // console.log(item.al.id)
                                await this.props.getSongInfo(item.id)
                                await this.props.getSong(item.id)
                                await this.props.getLrc(item.id)
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
                {
                    this.props.listType === 'search' &&
                    this.props.searchList.map((item,index)=>(
                        <Item
                            // thumb={item.al.picUrl}
                            key={index}
                            multipleLine
                            onClick={async (el) => {
                                if(this.props.listType !== 'myList') this.props.updateMyList(item)
                                // console.log(item.al.id)
                                await this.props.getSongInfo(item.id)
                                await this.props.getSong(item.id)
                                await this.props.getLrc(item.id)
                                this.props.viewAudio()
                                this.props.resetAudio()
                            }}
                            platform="cross"
                        >
                            {item.album.name}
                            <Brief>{item.artists[0].name}</Brief>
                        </Item>
                    ))
                }
                {
                    this.props.listType === 'myList' &&
                    this.props.myList.map((item,index)=>(
                        <Item
                            // thumb={item.al.picUrl}
                            key={index}
                            multipleLine
                            onClick={async (el) => {
                                if(this.props.listType !== 'myList') this.props.updateMyList(item)
                                // console.log(item.al.id)
                                await this.props.getSongInfo(item.id)
                                await this.props.getSong(item.id)
                                await this.props.getLrc(item.id)
                                this.props.viewAudio()
                                this.props.resetAudio()
                            }}
                            platform="cross"
                        >
                            {item.album ? item.album.name : item.al.name}
                            <Brief>{item.artists ? item.artists[0].name : item.ar[0].name}</Brief>
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
        listName:state.listName,
        listType:state.listType,
        myList:state.myList,
        searchList:state.searchList
    }
}
let mapDispatchToProps = dispatch => {
    return {
        getSong:(id)=> dispatch(update({
                api: `/song/url?id=${id}`,
                type:'UPDATE_AUDIO'
            })),
        getLrc:(id)=> dispatch(update({
            api: `/lyric?id=${id}`,
            type:'UPDATE_LRC'
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
        updateMyList:(song)=>dispatch({type:'UPDATE_MYLIST',payload:song})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListEX)
