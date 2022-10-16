import {memo,Fragment} from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
// import ColumnButton from "./Column";
import ExportButton from "./Export";
import ImportButton from "./Import";

function OptionComponent({children}){
    return (
        <Box sx={{textAlign:'end'}}>
            {children}
            <ExportButton />
            <ImportButton />
        </Box>
    )
};

OptionComponent.defaultProps = {
};
export default memo(OptionComponent)