import {memo,useEffect,useReducer } from 'react';
import {
    IconButton,
    CircularProgress,
    Icon,
    Dialog,
    DialogContent,
    Paper,
    DialogTitle,
    Typography
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { formatNumber } from '../../../../../Config/Format';
import {useFetch} from "../../../../../Config/Fetch";
import { reducerState,initState } from './init';
import { makeStyles } from '@mui/styles';
    
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
    const {id} = useParams();
    const classNames = useStyles();
    useEffect(() => {
        if(id){
            dispath(["set_open",true]);
            Fetch.put({
                api:"api/order/confirm",
                param:{id},
                onThen:()=>(dispath(["set_open",false])),
                onStart:()=>(dispath(["set_loading",true])),
                onEnd:()=>(dispath(["set_loading",false]))
            })
        }else{
            dispath(["set_open",false]);
        }
    }, [id]);
    return (
      <Dialog open={state.isOpen} PaperProps={{className:classNames.paper,sx:{p:0.5}}}>
        <DialogTitle component="h6" sx={{p:0.5}}>
          <Icon className="fas fa-bell" sx={{pr:1}} />Xin chờ
        </DialogTitle>
        <Paper component={DialogContent} variant="outlined" className={classNames.content} sx={{width:'30em',p:0.5}}>
            <Typography variant='h2'>
                <Icon component={CircularProgress} />Vui lòng đợi đang kiểm tra
            </Typography>
        </Paper>
      </Dialog>
    )
  }
  