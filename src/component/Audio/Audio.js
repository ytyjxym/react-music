import React from 'react';
import style from './/Audio.module.scss';
import {connect} from 'react-redux'
import timeTrans from "../../utils/timeTrans";
// import {update} from "../../store/actions";
import {withRouter} from 'react-router-dom'
import store from '../../plugins/redux'
import MyProgress from "../Progress/Progress";
class Audio extends React.Component{
    // constructor(){
    //     super();
    //     // console.log(this.refs)
    // }
    // componentDidMount() {
    //     // this.props.getSongInfo(this.props.nowAudio.id)
    //     console.log(this.props.SongInfo)
    // }
    state={
        currentTime:0,
        duration:0,
    }
    render = ()=>{
        return(
            <div>
                <div className={style.audio}>
                    <div className={style.audioBg}>
                        {this.props.SongInfo.al && <img src={this.props.SongInfo.al.picUrl} alt={''} className={style.audioImg} />}
                    </div>
                    <div className={style.audioMain}>
                        {this.props.SongInfo.al && <div className={style.overflow}>{this.props.SongInfo.al.name}</div>}
                        {this.props.SongInfo.al && <p>{this.props.SongInfo.ar[0].name}</p>}
                    </div>
                    <div className={style.progress}>
                        <div className={style.lrc}>
                        {
                            this.props.nowLrc
                        }
                        </div>
                        <MyProgress />
                    </div>
                    <div className={style.audioBtn}>
                        <span>{timeTrans(this.state.currentTime)}/{timeTrans(this.state.duration)}</span>
                        {
                            this.props.AudioPlay ?
                                <i className={'iconfont icon-pause-circle'} style={{paddingRight:'.05rem'}}  onClick={(event)=>this.stop(event)}></i> :
                                <i className={'iconfont icon-play-circle'} style={{paddingRight:'.05rem'}}  onClick={(event)=>this.play(event)}></i>
                        }
                        <i className={'iconfont icon-indent'} onClick={(event)=>this.showMylist(event)}></i>
                    </div>
                </div>
                <audio src={`${this.props.nowAudio.url}`} ref={'audio'} />
                <div className={style['audio__foot__bg']}></div>
            </div>
        )
    }
    showMylist = async (e) => {
        await store.dispatch({type:'CHANGE_LISTTYPE',payload:{listType:'myList',listName:'我的歌单'}})
        this.props.history.push('/list')
    }
    stop = (e) => {
        this.refs.audio.pause();
        clearInterval(this.timer)
        store.dispatch({type:'PLAY_AUDIO',payload:false})
    }
    play = (e) => {
        this.refs.audio.play();
        store.dispatch({type:"UPDATE_SONGDURATION",payload:this.refs.audio.duration});
        console.log(this.props.lrc);
        this.idx = 0;
        this.timer = setInterval(
            async ()=>{
                // console.log(this.refs.audio.currentTime*1000)
                // this.props.lrc.lycTime.map((item,index)=>{
                //     console.log(item)
                // })
                // this.props.lrc.lycTime && this.props.lrc.lycTime.some(async (item,index)=>{
                //     if(this.refs.audio.currentTime * 1000 >= +item-100 ){
                //         console.log(+item-100)
                //         await store.dispatch({type:'UPDATE_NOWLRC',payload:this.props.lrc.lycWord[index]})
                //     }
                //     // return (this.refs.audio.currentTime * 1000 >= +item-100 && +item !== 0)
                // })
                if(this.props.lrc.lycTime) {
                     // for (let i in this.props.lrc.lycTime) {
                    for(let i = this.idx; i<this.props.lrc.lycTime.length;i++){
                        // console.log(i)
                        // console.log(this.props.lrc.lycTime[i])
                        // console.log(this.refs.audio.currentTime * 1000 >= +this.props.lrc.lycTime[i] - 100)
                        if (this.refs.audio.currentTime * 1000 >= +this.props.lrc.lycTime[i] + 100) {
                            store.dispatch({type: 'UPDATE_NOWLRC', payload: this.props.lrc.lycWord[i]})
                            this.idx++;
                            break;
                        }else{
                            break;
                        }
                    }
                }
                await this.setState({
                    currentTime:this.refs.audio.currentTime,
                    duration:this.props.songDuration
                })
                await store.dispatch({type:'PLAY_PROGRESS',payload:(this.refs.audio.currentTime / this.refs.audio.duration)*100})
            },
            50
        )
        store.dispatch({type:'PLAY_AUDIO',payload:true})
    }
}

let mapStateToProps = (state) => {
    return {
        AudioList:state.AudioList,
        nowAudio:state.nowAudio,
        AudioPlay:state.AudioPlay,
        AudioPercent:state.AudioPercent,
        SongInfo:state.SongInfo,
        lrc:state.lrc,
        songDuration:state.songDuration,
        nowLrc:state.nowLrc
    }
}
let mapDispatchToProps = dispatch => {
    return {
        // getBanner:()=>dispatch(update({
        //     api:'/banner',
        //     type:'UPDATE_Audio'
        // }))
        // getUrl:()=>dispatch(update({
        //     api:'/song/url?id=133998',
        //     type:'UPDATE_AUDIO'
        // }))
        // getSongInfo:(id)=>dispatch(update({
        //     api:`/song/detail?ids=${id}`,
        //     type:'UPDATE_SONGINFO'
        // }))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Audio))
