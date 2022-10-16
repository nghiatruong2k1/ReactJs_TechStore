import {memo,Fragment} from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
// import ColumnButton from "./Column";
import AddButton from "./Add";
import ExportButton from "./Export";
import ImportButton from "./Import";
// import TrashButton from "./Trash";
// import RefetchButton from "./Refetch";
// import RemoveButton from "./Remove";

function OptionComponent({add}){
    return (
        <Box sx={{textAlign:'end'}}>
            <AddButton {...add}/>
            <ExportButton />
            <ImportButton />
        </Box>
    )
};

OptionComponent.defaultProps = {
    add:{}
};
export default memo(OptionComponent)