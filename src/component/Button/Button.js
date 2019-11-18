import React from 'react';
import { Button, WingBlank,WhiteSpace } from 'antd-mobile';
export default class Btn extends React.Component{
    render = ()=>{
        return(
            <WingBlank>
                <Button type="primary">primary</Button><WhiteSpace />
            </WingBlank>
        )
    }
}