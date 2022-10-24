import {memo,Fragment,useEffect,useState,useMemo} from 'react';
import clsx from 'clsx';
import {Paper,Grid,Card,CardContent} from '@mui/material/';


import Provider from './provider';
import Option from './Option';
import Image from './Image';
import Progress from "./Progress";
function AddItem({data,onChange,...props}){
    return (
    <Provider data={data} onChange={onChange}>
        <Card>
            <CardContent component={Grid} container spacing={1} sx={{p:1}}>
                <Image xs={2}/>
                <Progress xs={8}/>
                <Option xs={2}/>
            </CardContent>
            <CardContent sx={{display:"none"}}/>
        </Card>
    </Provider>
    )
};export default memo(AddItem)