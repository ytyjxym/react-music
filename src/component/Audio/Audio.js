import React from 'react';
import style from './/Audio.module.scss';
import {connect} from 'react-redux'
// import {update} from "../../store/actions";
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
                        <MyProgress />
                    </div>
                    <div className={style.audioBtn}>
                        {
                            this.props.AudioPlay ?
                                <i className={'iconfont icon-pause-circle'} style={{paddingRight:'.05rem'}}  onClick={(event)=>this.stop(event)}></i> :
                                <i className={'iconfont icon-play-circle'} style={{paddingRight:'.05rem'}}  onClick={(event)=>this.play(event)}></i>
                        }
                        <i className={'iconfont icon-indent'}></i>
                    </div>
                </div>
                <audio src={`${this.props.nowAudio.url}`} ref={'audio'} />
                <div className={style['audio__foot__bg']}></div>
            </div>
        )
    }
    stop = (e) => {
        this.refs.audio.pause();
        this.timer = null;
        store.dispatch({type:'PLAY_AUDIO',payload:false})
    }
    play = (e) => {
        this.refs.audio.play();
        this.timer = setInterval(
            ()=>{
                store.dispatch({type:'PLAY_PROGRESS',payload:(this.refs.audio.currentTime / this.refs.audio.duration)*100})
            }
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

export default connect(mapStateToProps,mapDispatchToProps)(Audio)