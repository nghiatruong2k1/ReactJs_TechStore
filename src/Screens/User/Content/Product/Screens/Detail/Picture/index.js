import {memo,useRef,useContext,useReducer} from 'react';

import clsx from 'clsx';
import {Grid,Card,CardActions,CardContent} from '@mui/material/';
import Provider from "./provider";
import { DetailContext } from '../provider';
import {initState,reducerState} from "./init";
import Images from "./Images/";
import Arrows from "./Arrows/";
import Dots from "./Dots/";
function SliderContent({...props}){
  const [state,dispath] = useReducer(reducerState,initState);
  const detail = useContext(DetailContext);
  const thisRef = useRef(null);
  return(
  <Provider 
    state={state} dispath={dispath} 
    id={detail.state.data.Id} setImages={(images)=>(detail.dispath(["set_images",images]))}
  >
    <Grid item {...props}>
      <Card sx={{height:"100%"}}>
        <CardContent sx={{position:'relative'}}>
          <Images ref={thisRef} images={detail.state.images}/>
          {
            detail.state.images.length > 1 &&
            (<Arrows slider={thisRef.current}/>)
          }
          {
            detail.state.images.length > 1 &&
            <Dots slider={thisRef.current} images={detail.state.images}/>
          }
        </CardContent>
      </Card> 
    </Grid>
  </Provider>
  )
}
export default memo(SliderContent);