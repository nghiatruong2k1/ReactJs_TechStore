import {memo,Fragment} from 'react';
import {Stack,Rating } from '@mui/material/';
import {Star} from '@mui/icons-material/';
function InfoRating({loading,rating}){
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Rating
                value={!loading && rating || 0}
                readOnly
                size="small"
                precision={0.1}
                max={5}
                emptyIcon={<Star />}
            />
        </Stack>
    )
};export default memo(InfoRating)