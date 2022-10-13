import { memo, useCallback, useRef } from 'react';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@material-ui/core/';
import CustomMessageContent from './MessageContent';
import styles from './Message.module.css';
function CustomMessage({ children }) {
  const SnackRef = useRef();
  const renderContent = useCallback(
    (key, mes) => {
      return (
        <CustomMessageContent
          key={key}
          onClose={() => {
            SnackRef.current && SnackRef.current.closeSnackbar(key);
          }}
          {...mes}
        />
      );
    },
    [SnackRef.current],
  );
  return (
    <SnackbarProvider
      ref={SnackRef}
      maxSnack={3}
      className={styles.container}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      preventDuplicate
      autoHideDuration={10000}
      TransitionComponent={Slide}
      content={renderContent}
    >
      {children}
    </SnackbarProvider>
  );
}
export default memo(CustomMessage);

/** */
