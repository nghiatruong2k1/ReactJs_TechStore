import { memo} from 'react';
import { NavLink } from 'react-router-dom';
import { CardActions, Button } from '@mui/material/';
import { CartController } from '~/controllers';
function CartFooter({ onClose }) {
  return (
    <CardActions sx={{ justifyContent: 'center',p:0.5 }}>
      <Button
        variant="contained"
        startIcon={<span className="fas fa-shopping-cart" />}
        component={NavLink}
        onClick={onClose}
        color='success'
        to={CartController.index.getAction()}
      >
        Xem chi tiết giỏ hàng
      </Button>
    </CardActions>
  );
}
export default memo(CartFooter);
