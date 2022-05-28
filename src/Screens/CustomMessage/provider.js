import {memo,Fragment,useRef} from 'react';

import { SnackbarProvider} from 'notistack';
import {Slide} from '@material-ui/core/';
import CustomMessageContent from "./index";
function CustomMessage({children,...props}){
    const SnackRef = useRef();
    return (
        <SnackbarProvider 
            ref={SnackRef}
            maxSnack={3}  
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            preventDuplicate
            autoHideDuration={10000}
            TransitionComponent={Slide}
            content={(key,mes)=>{
                return (
                    <CustomMessageContent 
                        key={key} 
                        onClose={()=>{SnackRef.current.closeSnackbar(key)}} 
                        {...mes}
                    />
                )
            }}
        >
            {children}
        </SnackbarProvider>
    )
};
export default memo(CustomMessage)