import { memo, useContext } from 'react';
import { Paper, IconButton } from '@mui/material/';
import { PhotoCamera } from '@mui/icons-material/';
import { Frame, Image } from '~/components';
import { Link } from 'react-router-dom';
function CellImage({ loading, text, display:{onChange,nameAlt,name,to}, data }) {
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
        {
          data && to && <Link to={to(data)} style={{position:'absolute',inset:0}}/>
        }
      </Frame>
    </>
  );
}
export default memo(CellImage);
