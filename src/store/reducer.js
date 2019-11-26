export default (state,{type,payload})=>{
    switch (type) {
        case'UPDATE_BANNER':
            return {...state,banner:payload.banners};

        case'UPDATE_AUDIO':
            return {...state,nowAudio:payload.data[0]};

        case'PLAY_AUDIO':
            return {...state,AudioPlay:payload};

        case 'PLAY_PROGRESS':
            return {...state,AudioPercent:payload};

        case 'UPDATE_PLAYLIST':
            return {...state,PlayList:payload.playlists};

        case 'UPDATE_SONGLIST':
            return {...state,SongList:payload.playlist.tracks};

        case 'UPDATE_NOWAUDIO':

            return {...state,nowAudio:payload};

        case 'LOADING' :
            console.log(payload)
            return {...state,showLoading:payload};
        case 'UPDATE_SONGINFO' :
            console.log(payload.songs)
            return {...state,SongInfo:payload.songs[0]};
        case 'VIEW_AUDIO' :
            console.log(payload)
            return {...state,viewAudio:payload};
        case 'RESET_AUDIO' :
            console.log(payload)
            return {...state,AudioPlay:payload};
        case 'IS_HOME' :
            console.log(payload)
            return {...state,isHome:payload};
        default:
            return state;

    }

}