import {memo,Fragment,useContext} from 'react';
import {Stack} from '@mui/material/';
import {AddImageContext} from "../provider";
import {ViewContent} from "../../../../components"
import AddItem from "./Item";
function AddContent(props){
    const {state,dispath} = useContext(AddImageContext);
    return (
        <Stack spacing={1} sx={{p:1}} >
            <ViewContent empty={"Chưa tải tệp hình ảnh nào!"} loading={false} length={state.length}>
            {
                state.map(function(item,index){
                    if(item){
                        return(<AddItem data={item} onChange={()=>(dispath(['update']))} key={index}/>)
                    }else{
                        return(<Fragment key={index}/>)
                    }
                })
            }
            </ViewContent>
        </Stack>
    )
};export default memo(AddContent)