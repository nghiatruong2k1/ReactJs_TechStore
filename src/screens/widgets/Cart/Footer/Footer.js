import { memo} from 'react';
import { NavLink } from 'react-router-dom';
import { CardActions, Button } from '@mui/material/';
import { routers } from '~/config/Router';
function CartFooter({ onClose }) {
  return (
    <CardActions sx={{ justifyContent: 'center',p:0.5 }}>
      <Button
        variant="contained"
        startIcon={<span className="fas fa-shopping-cart" />}
        component={NavLink}
        onClick={onClose}
        color='success'
        to={routers.profile.cart.getAction()}
      >
        Xem chi tiết giỏ hàng
      </Button>
    </CardActions>
  );
}
export default memo(CartFooter);
