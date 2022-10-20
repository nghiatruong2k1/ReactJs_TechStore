import { memo } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip, Stack, Grid, Typography } from '@mui/material/';
import {
  ContentCopy,
  Autorenew,
  Save,
  SaveAs,
  ArrowBack,
} from '@mui/icons-material/';
import { useGetCatalogDetailContext } from '../../provider';
function DetailHead({ back, title, ...props }) {
  const {
    handle: { handleSubmit, handleFetch },
  } = useGetCatalogDetailContext();
  return (
    <Grid item {...props}>
      <Stack
        direction="row"
        justifyContent={'flex-end'}
        sx={{ fontSize: '1.2em', color: 'var(--text-primary)' }}
      >
        {back && (
          <Tooltip title="Danh sách" placement="top" arrow>
            <span>
              <IconButton color="primary" to={back || '/404'} component={Link}>
                <ArrowBack />
              </IconButton>
            </span>
          </Tooltip>
        )}
        <Typography>{title}</Typography>
        <div className={'grow'}></div>
        <Tooltip title="Lưu và làm mới" placement="top" arrow>
          <span>
            <IconButton
              color="info"
              onClick={() => {
                handleSubmit && handleSubmit(handleFetch);
              }}
            >
              <Save />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Lưu và tiếp tục" placement="top" arrow>
          <span>
            <IconButton
              color="secondary"
              onClick={() => {
                handleSubmit && handleSubmit();
              }}
            >
              <SaveAs />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Sao chép" placement="top" arrow>
          <span>
            <IconButton color="success">
              <ContentCopy />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title={'Làm mới'} placement="top" arrow>
          <span>
            <IconButton color="primary">
              <Autorenew />
            </IconButton>
          </span>
        </Tooltip>
      </Stack>
    </Grid>
  );
}
export default memo(DetailHead);
