import React from 'react';
import { SearchBar} from 'antd-mobile';
import List from "../../library/List/List";
import store from "../../plugins/redux";
import {update} from "../../store/actions";
import {connect} from "react-redux";

class Search extends React.Component{
    // state={
    //     searchMsg:''
    // }
    render() {
        return(
            <div>
                <SearchBar
                    placeholder="搜索"
                    maxLength={8}
                    onChange={(val)=>{
                        if(!!(val)){
                            store.dispatch(update({
                                api:`/search?keywords=${val}`,
                                type:'UPDATE_SEARCHLIST'
                            }))
                        }
                    }}
                />
                <List/>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {

    }
}
// let mapDispatchToProps = dispatch => {
//     return {
//     }
// }
export default connect(mapStateToProps,null)(Search)
