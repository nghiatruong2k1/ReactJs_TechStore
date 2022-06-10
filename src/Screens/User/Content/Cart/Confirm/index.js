import {memo,useEffect,useReducer,useMemo } from 'react';
import {
    IconButton,
    CircularProgress,
    Icon,
    Dialog,
    DialogContent,
    Paper,
    DialogTitle,
    Typography,
    Stack
} from '@mui/material';
import { useParams ,useNavigate} from 'react-router-dom';
import { formatNumber } from '../../../../../Config/Format';
import {useFetch} from "../../../../../Config/Fetch";
import { reducerState,initState } from './init';
import { makeStyles } from '@mui/styles';
import {Error,CheckCircle,Warning,Notifications,Help} from '@mui/icons-material/';
const useStyles = makeStyles((theme)=>{
    return {
        paper:{
            color:`${theme.palette.text.paper} !important`,
            backgroundColor:`${theme.palette.background.paper} !important`
        },content:{
            background:theme.palette.background.default,
            color:theme.palette.text.default
        }
        }}
);
export default function DialogConfim({}){
    const [state,dispath] = useReducer(reducerState,initState);
    const Fetch =useFetch();
    const navigator = useNavigate();
    const {id} = useParams();
    const classNames = useStyles();
    useEffect(() => {
        if(id){
            dispath(["set_open",true]);
            Fetch.put({
                api:"api/order/confirm/"+id,
                onThen:({data})=>{
                    if(data && data.value){
                        dispath(["set_success",true]);
                    }else{
                        dispath(["set_error",true]);
                    }
                },onErrot:()=>{
                    dispath(["set_error",true]);
                },onStart:()=>{
                    dispath(["set_loading",true]);
                    dispath(["set_error",false]);
                    dispath(["set_success",false]);
                },
                onEnd:()=>(dispath(["set_loading",false]))
            })
        }else{
            dispath(["set_open",false]);
        }
    }, [id]);
    const isDisabled = useMemo(function(){
        if(state.isError){
            return false;
        }
        if(state.isSuccess){
            return false;
        }
        return true;
    },[state.isError,state.isSuccess])
    return (
      <Dialog open={state.isOpen} PaperProps={{className:classNames.paper,sx:{p:0.5}}}>
        <DialogTitle component={Stack} direction="row" alignItems="center" sx={{p:0.5}}>
          <Icon className="fas fa-bell"/>
          <Typography sx={{flex:1,px:1}}>Xin chờ</Typography>
          <IconButton disabled={isDisabled} onClick={()=>{
              dispath(["set_open",false]);
              navigator({
                  pathname:"/"
              })
          }}><Icon className="fas fa-times"/></IconButton>
        </DialogTitle>
        <Paper component={DialogContent} variant="outlined" className={classNames.content} sx={{width:'30em'}}>
            <Typography variant='h2' sx={{p:1}}>
                {
                    isDisabled && (<><Icon component={CircularProgress} />Vui lòng đợi đang kiểm tra</>)
                    ||(state.isSuccess && (<><Icon sx={{color:'var(--success)'}} component={CheckCircle}/>Xác nhận thành công</>))
                    ||(state.isError && (<><Icon sx={{color:'var(--warning)'}} component={Warning}/>Xác nhận không thành công</>))
                }
            </Typography>
        </Paper>
      </Dialog>
    )
  }
  