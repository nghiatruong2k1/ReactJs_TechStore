import { useCallback, memo } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Notfound.module.css';
import { AnimationText } from '~/components';
function NotfoundComponent() {
  const handleClickBackButton = useCallback(function () {}, []);
  return (
    <Container maxWidth={'100%'} >
      <Stack alignItems={'center'} justifyContent={'center'} spacing={1} mb={5}>
        <Typography className={styles.number}>
          <AnimationText text="404" />
        </Typography>
        <Typography className={styles.title}>
          <AnimationText text="PAGE NOT FOUNT"/>
        </Typography>
        <Typography className={styles.description}>
          <AnimationText text="Oh no, We can't see the page you're looking for."/>
        </Typography>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Button
            to="/"
            component={Link}
            variant="contained"
            className="error-button circle-btn"
            startIcon={<span className="fas fa-home" />}
          >
            <span className="text">Go Home</span>
          </Button>
          <Button
            to="#"
            onClick={handleClickBackButton}
            variant="contained"
            className="error-button circle-btn"
            startIcon={<span className="fas fa-chevron-left" />}
          >
            <span className="text">Go Back</span>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
export default memo(NotfoundComponent);
