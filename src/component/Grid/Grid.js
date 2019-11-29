import {Grid, WhiteSpace} from 'antd-mobile';
import React from 'react'
import {update} from '../../store/actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import './Grid.scss'
import store from "../../plugins/redux";
// const data1 = Array.from(new Array(9)).map((_val, i) => ({
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//     text: `name${i}`,
// }));
// console.log(data1)



class GridExample extends React.Component{

    componentDidMount() {
        this.props.getPlayList();
    }

    render = () => {
        let data = this.props.PlayList.map(item=>({
            icon:item.coverImgUrl,
            text:item.name,
            id:item.id,
        }))
        return (
        <div>
            <WhiteSpace/>
            <div className="sub-title" style={{color:'#000',fontSize:'.26rem'}}>热门歌单</div>
            <WhiteSpace/>
            <Grid data={data}
                  columnNum={3}
                  hasLine={false}
                  renderItem={dataItem => (
                      <Link style={{ padding: '.125rem',display:'block' }}
                            to={{pathname:`/list`,listId:dataItem.id,search:`?id=${dataItem.id}`}}
                            onClick={async (el)=>{
                                await store.dispatch({type:'CHANGE_LISTTYPE',payload:{listType:'songList',listName:'所选歌单'}})
                                await this.props.getSongList(dataItem.id)
                      }}>
                          <img src={dataItem.icon} style={{ width: '1.5rem', height: '1.5rem' }} alt="" />
                          <div style={{ color: '#888', fontSize: '.12rem', marginTop: '.10rem' }}>
                              <span>{dataItem.text} </span>
                          </div>
                      </Link>
                  )}

            />
        </div>
    );
    }

}
let mapStateToProps = (state) => {
    return {
        PlayList:state.PlayList
    }
}
let mapDispatchToProps = dispatch => {
    return {
        getPlayList:()=>dispatch(update({
            api:'/top/playlist?limit=12',
            type:'UPDATE_PLAYLIST'
        })),
        getSongList:(id)=>dispatch(update({
            api: `/playlist/detail?id=${id}`,
            type:'UPDATE_SONGLIST'
        }))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GridExample)
