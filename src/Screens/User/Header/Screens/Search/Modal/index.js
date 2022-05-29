import {memo,useContext,useMemo,useState} from 'react';
import {Divider,Grid,Dialog,DialogContent} from '@mui/material/';
import clsx from "clsx";

import ToggleButton from "./Toggle/";
import SearchHead from "./Head/";
import SearchForm from "./Form/";
function Toggle({onClick,...props}){
  const [isOpen,setOpen] = useState(false);
  return (
    <>
      <ToggleButton onClick={()=>(setOpen(!isOpen))}/>
      <Dialog 
        open={isOpen}
        onClose={()=>(setOpen(false))}
        fullWidth={true}
        scroll={'body'}
        PaperProps={{
            sx:{ 
              m:{
                xs:0.5,
                sm:1,
                md:1.5,
                lg:2
              },p:1
            }
        }}
      >
        <SearchHead onClose={()=>(setOpen(false))}/>
        <Divider />
        <DialogContent sx={{p:1}}>
          <SearchForm />
          <Divider />
        </DialogContent>
      </Dialog>
    </>
  )
}
export default memo(Toggle);