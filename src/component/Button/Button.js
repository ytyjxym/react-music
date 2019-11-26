import React from 'react';
import { Button, WingBlank,WhiteSpace } from 'antd-mobile';
import propTypes from 'prop-types'

 let Btn = (props)=>{
    return(
        <WingBlank style={{width:props.width}}>
            <Button type="primary" onClick={props.clickHandel}>{props.value}</Button><WhiteSpace />
        </WingBlank>
    )
}

Btn.defaultProps = {
     width:"40%",
    value:"1",
    clickHandel:()=>{
        console.log(1)
    }
}
Btn.propTypes = {
     width:propTypes.string,
    value:propTypes.string,
    clickHandel:propTypes.func
}
export default Btn