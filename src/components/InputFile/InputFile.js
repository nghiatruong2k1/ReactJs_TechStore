import { memo } from 'react';
import { FormControl, Input,Dialog } from '@mui/material/';
import styles from './InputFile.module.css';
import { Frame, Image } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { useDisclosure } from '@mantine/hooks';
function InputFile({ value, alt , disabled }) {
  const [isOpen, { close, open }] = useDisclosure(false);
  return (
    <FormControl className={styles.root} onClick={open} disabled={disabled}>
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
      <Dialog
        open={isOpen}
        onClose={close}
        fullWidth={true}
        disablePortal
        scroll={'body'}
        PaperProps={{
          sx: {
            m: {
              xs: 1,
              md: 1.5
            },
            p: 1,
          },
        }}
      >
        
      </Dialog>
    </FormControl>
  );
}
export default memo(InputFile);
