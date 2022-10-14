import {memo,Fragment} from 'react';
import clsx from 'clsx';
import { Skeleton, Stack, Typography } from '@mui/material';
function HeadComponent({total,loading}){
    return (
        <Stack>
            <Typography component={'h6'}>
                {(loading && <Skeleton />) || `Tổng cộng: ${total ?? 0}`}
            </Typography>
        </Stack>
    )
};export default memo(HeadComponent)