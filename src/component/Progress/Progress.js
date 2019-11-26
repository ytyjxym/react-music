import { Progress } from 'antd-mobile';
import React from 'react'
import {connect} from 'react-redux'
class MyProgress extends React.Component {
    render() {
        return (
            <div className="progress-container">
                <div className="show-info">
                    <div className="progress"><Progress percent={this.props.AudioPercent} position="normal" /></div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        AudioPercent:state.AudioPercent,
    }
}


export default connect(mapStateToProps,null)(MyProgress)