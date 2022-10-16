import { memo, useContext } from 'react';
import { Paper, IconButton } from '@mui/material/';
import { PhotoCamera } from '@mui/icons-material/';
import { Frame, Image } from '~/components';
function CellImage({ loading, text, display:{onChange,nameAlt,name}, data }) {
  return (
    <>
      <Frame variant={'rectangle'} loading={loading}>
        <Image
          fit="contain"
          alt={data && data[nameAlt]}
          src={data && data[name]}
        />
        {onChange && (
          <IconButton sx={{ position: 'absolute', top: 0, right: 0 }}>
            <PhotoCamera />
          </IconButton>
        )}
      </Frame>
    </>
  );
}
export default memo(CellImage);
