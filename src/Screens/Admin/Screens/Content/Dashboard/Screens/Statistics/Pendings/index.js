import {memo} from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Stack,
  Grid,
  Button
} from '@mui/material/';
import {
  ArrowForward,
  Autorenew
} from '@mui/icons-material/';
import{ NavLink }from'react-router-dom';
import styles from './styles.module.css';
function Statistic({...props}){
  return(
    <Grid item {...props}>
      <Card className={styles.card}>
        <CardContent className={styles.body}>
          <Typography 
              variant="h3"
              className={styles.number}
          >
            0
          </Typography>
          <Typography 
              className={styles.title}
          >
            Pending return requests
          </Typography>
          <Autorenew className={styles.icon}/>
        </CardContent>
        <Divider />
        <CardActions 
          className={styles.footer}  
          disableSpacing
        >
              <Button 
                component={NavLink}
                className={styles.button} 
                to="/" 
                size="small"
                endIcon={<ArrowForward />}
              >
                More Info
              </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default memo(Statistic);