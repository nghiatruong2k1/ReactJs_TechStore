import { memo, useRef, useState } from 'react';
import {
  FormControlLabel,
  IconButton,
  ListItemButton,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
} from '@mui/material';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetDatagridContext } from '../../provider';
function ColumnButton() {
  const { state, dispath } = useGetDatagridContext();
  const [isOpen, setOpen] = useState(false);
  const thisRef = useRef();
  console.log(state);
  return (
    <>
      <Tooltip title="Hiển thị" placement="top" arrow>
        <span ref={thisRef}>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
            color="inherit"
          >
            <FontAwesomeIcon icon={faColumns} />
          </IconButton>
        </span>
      </Tooltip>
      <Menu
        open={isOpen}
        disablePortal
        anchorEl={thisRef.current}
        onClose={() => setOpen(false)}
      >
        {Object.keys(state).map((key, index) => (
          <MenuItem key={index} disablePadding>
            <ListItemButton disablePadding>
              <FormControlLabel
                control={<Switch checked={state[key].isShow} />}
                onChange={()=>{dispath([key])}}
                label={state[key].title}
              />
            </ListItemButton>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
export default memo(ColumnButton);
