import {memo,Fragment,useEffect, useState} from 'react';
import PropTypes from 'prop-types';
function AnimationTextComponent({text,delay}){
    const [str,setString] = useState('');
    useEffect(()=>{
        if(text !== str){
            const timeout = setTimeout(()=>{
                setString(text.slice(0,str.length+1))
            },delay);
            return ()=>{
                clearTimeout(timeout)
            }
        }
    },[text,str])
    return (
        <Fragment>
            {str}
        </Fragment>
    )
};
AnimationTextComponent.defaultProps = {
    delay:100,
    text:''
}
AnimationTextComponent.propTypes = {
    delay:PropTypes.number,
    text:PropTypes.string
}
export default memo(AnimationTextComponent)