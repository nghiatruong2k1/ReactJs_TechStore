import { memo} from 'react';
import { Box} from '@mui/material';
import BoxNav from './components/BoxNav';
import LeftMenu from './Screens/Left';
import RightMenu from './Screens/Right';
import DrawerNav from './components/DrawerNav';
function NavbarComponent({isToggle,toggleComponent,children,...props}) {
  return (
    <>
      <Box component={isToggle && DrawerNav || BoxNav} toggleComponent={toggleComponent} {...props}>
        {children}
        <LeftMenu vertical={isToggle}/>
        <RightMenu vertical={isToggle}/>
      </Box>
    </>
  );
}
export default memo(NavbarComponent);
