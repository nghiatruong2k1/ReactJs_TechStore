import { memo, useCallback, useReducer } from 'react';
import { FormControl, Input, Dialog } from '@mui/material/';
import styles from './InputFile.module.css';
import { Frame, Image } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { reducerState, initState, initCase } from './init';

import ContentList from './ContentList';
function InputFile({ src, alt, onChange, value, disabled }) {
  const [state, dispath] = useReducer(reducerState, initState);
  const handleOpen = useCallback(() => {
    dispath([initCase.TOGGLE_OPEN, true]);
  }, []);
  const handleClose = useCallback(() => {
    dispath([initCase.TOGGLE_OPEN, false]);
  }, []);
  return (
    <FormControl className={styles.root} disabled={disabled}>
      <Frame variant={'rectangle'} onClick={handleOpen}>
        <Image
          fit={'contain'}
          alt={alt ?? ''}
          src={src ?? ''}
          placeholder={
            <FontAwesomeIcon className={styles.icon} icon={faCloudUpload} />
          }
        />
      </Frame>
      <Dialog
        open={state.isOpen}
        onClose={handleClose}
        fullWidth={true}
        disablePortal
        scroll={'body'}
        PaperProps={{
          sx: {
            m: {
              xs: 1,
              md: 1.5,
            },
            p: 1,
          },
        }}
      >
        {(state.router === 'add' && <></>) ||
          (state.router === 'update' && <></>) || (
            <ContentList
              onClose={handleClose}
              onChange={onChange}
              value={value}
            />
          )}
      </Dialog>
    </FormControl>
  );
}
export default memo(InputFile);
