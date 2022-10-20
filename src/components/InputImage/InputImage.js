import { memo } from 'react';
import {  FormControl, Input } from '@mui/material/';
import styles from './InputImage.module.css';
import { Frame, Image } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
function InputImage({ value, alt, onClick,disabled }) {
  return (
    <FormControl className={styles.root} onClick={onClick} disabled={disabled}>
      <Input sx={{ display: 'none' }} />
      <Frame variant={'rectangle'}>
        <Image
          variant={'contain'}
          alt={alt ?? ''}
          src={value ?? ''}
          placeholder={
            <FontAwesomeIcon className={styles.icon} icon={faCloudUpload} />
          }
        />
      </Frame>
    </FormControl>
  );
}
export default memo(InputImage);
