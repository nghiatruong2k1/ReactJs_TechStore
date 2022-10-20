import { memo, useRef, useState } from 'react';
import { Tooltip, IconButton } from '@mui/material/';
import Dropdown from '~/components/Dropdown';

function AfterOption({ name, show, onToggleShow }) {
  const [isOpen, setOpen] = useState(false);
  const thisRef = useRef();
  return (
    <>
      <Tooltip title="Tùy chọn" placement="top" arrow>
        <span>
          <IconButton
            ref={thisRef}
            onClick={() => setOpen(!isOpen)}
            color="primary"
          >
            <span className="fas fa-ellipsis-v" />
          </IconButton>
        </span>
      </Tooltip>
      <Dropdown
        open={isOpen}
        anchorEl={thisRef.current}
        onClose={() => setOpen(false)}
        data={[
          {
            text: 'Ẩn hiển thị',
            icon: <span className={`fas fa-eye-slash`} />,
            onClick: () => onToggleShow(name, !show),
          },
        ]}
      />
    </>
  );
}
export default memo(AfterOption);
