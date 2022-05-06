import {memo,useReducer,useEffect} from 'react';
import clsx from 'clsx';
import {LoadingButton} from "@mui/lab/";
import {Grid,Stack,Button,Typography,List,ListItem,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import {Frame,Image} from "../../../../../../Components/"
import {initData,reducer} from './init'
import Provider from "./provider";
import {getRoute} from "../../../../../../Config/Route";
function Popular({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath}>
      <Grid item {...props}>
      <Stack component={List}>
        <Typography className={styles.title} component="h6">Danh mục nỗi bật</Typography>
        {
          state.datas.map(function(data,index){
            return (
                <Grid container component={ListItem} key={index} divider my={0} py={1} columnSpacing={1} alignItems="center">
                  <Grid item xs={8}>
                    <Typography mb={1} className={styles.name}>
                        {
                          (data && !state.isLoading) && data.Name 
                          || <Skeleton variant="text" className="skeleton"/>
                        }
                    </Typography>
                    <LoadingButton 
                      variant="contained" 
                      loading={!Boolean(data) || state.isLoading}
                      component={(data && !state.isLoading) && NavLink || "button"} 
                      color="info"
                      className={styles.button}
                      to={`${getRoute("user","product","category",{alias:data && data.Alias})}`}
                    >Xem ngay
                    </LoadingButton>
                  </Grid> 
                  <Grid item xs={4}>
                    <Frame square loading={!Boolean(data) || state.isLoading}>
                      <Image contain src={data && data.ImageUrl}/>
                    </Frame>
                  </Grid>
                </Grid>
            )
          },[])
        }
      </Stack>
    </Grid>
    </Provider>
  )
}
export default memo(Popular);