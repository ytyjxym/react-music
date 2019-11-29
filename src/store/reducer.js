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
            // console.log(payload)
            return {...state,PlayList:payload.playlists};

        case "INIT_MYLIST":
            // console.log(payload,state.myList)

            return {...state,myList:payload};
        case 'UPDATE_MYLIST':
            // console.log(payload,state.myList)
            let newMyList = state.myList;
            // console.log(newMyList)
            newMyList.push(payload)
            // console.log(newMyList, state.myList)

            window.localStorage.setItem('xymSongList', JSON.stringify(newMyList))
            return {...state,myList:newMyList};

        case 'CHANGE_LISTTYPE':
            return {...state,listType:payload.listType,listName:payload.listName || '我的歌单'};

        case 'DEL_SONGLIST':
            return {...state,SongList:[],listName:''};

        case 'UPDATE_SONGLIST':
            // console.log(payload)
            return {...state,SongList:payload.playlist.tracks,listType:'songList',listName:'当前歌单'};
        case 'UPDATE_SEARCHLIST':
            // console.log(payload.result.songs)
            // console.log(state)
            return {...state,searchList:payload.result.songs,listType:'search',listName:'搜索结果'};

        case 'UPDATE_NOWAUDIO':

            return {...state,nowAudio:payload};
        case 'CLEAR_SEARCH':

            return {...state,searchList:[]};
        case 'LOADING' :
            return {...state,showLoading:payload};
        case 'UPDATE_SONGINFO' :
            return {...state,SongInfo:payload.songs[0]};
        case 'VIEW_AUDIO' :
            return {...state,viewAudio:payload};
        case 'RESET_AUDIO' :
            return {...state,AudioPlay:payload};
        case 'IS_HOME' :
            return {...state,isHome:payload};
        case 'VIEW_DRAWER' :
            let newBDrawer = !state.bDrawer
            return {...state,bDrawer:newBDrawer};
        default:
            return state;

    }

}
