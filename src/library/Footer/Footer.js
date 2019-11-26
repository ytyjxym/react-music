import React from 'react';
// import { NavBar, Icon } from 'antd-mobile';
// import Button from "../../component/Button/Button";
// import style from '../../component/Button/Button.module.scss'
import {connect} from 'react-redux'
import Audio from "../../component/Audio/Audio";
class Footer extends React.Component{
    render = ()=>{
        return(
            <div>
                {
                    this.props.viewAudio && <Audio></Audio>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        viewAudio: state.viewAudio
    }
}

export default connect(mapStateToProps,null)(Footer)