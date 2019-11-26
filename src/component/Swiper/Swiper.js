import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import React from 'react'
import './Swiper.scss'
import {update} from '../../store/actions'
import {connect} from 'react-redux'
const BgElement = Element.BgElement;

    class Swipe extends React.Component{
        componentDidMount(){
            this.props.getBanner()
        }
        render = () =>(
                <BannerAnim prefixCls="banner-user" autoPlay arrow={false} type={'across'} duration={1000} autoPlaySpeed={5000}>
                    {
                        this.props.banner.map((item,index)=>(
                            <Element
                                prefixCls="banner-user-elem"
                                key={index}
                            >
                                <BgElement
                                    key={index}
                                    className="bg"
                                    style={{
                                        backgroundImage: `url(${item.imageUrl})`,
                                        backgroundSize:'110%',
                                        backgroundPosition:'center',
                                        backgroundRepeat:'no-repeat',
                                        borderRadius:'5px'
                                    }}
                                />
                            </Element>
                        ))
                    }
                </BannerAnim>)
    }
let mapStateToProps = (state) => {
    return {
        banner:state.banner
    }
}
let mapDispatchToProps = dispatch => {
    return {
        getBanner:()=>dispatch(update({
            api:'/banner',
            type:'UPDATE_BANNER'
        }))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Swipe)