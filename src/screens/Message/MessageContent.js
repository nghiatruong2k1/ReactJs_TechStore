import { memo,  useMemo,  forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Paper,
  Stack,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  SvgIcon
} from '@mui/material/';

import { ExpandMore, Close } from '@mui/icons-material/';
import { SnackbarContent } from 'notistack';
import {
  Error,
  CheckCircle,
  Warning,
  Notifications,
  Help,
} from '@mui/icons-material/';
import { useDisclosure } from '@mantine/hooks';
import styles from './Message.module.css';
const TYPES = {
  error: {
    title: 'Có lỗi',
    icon: Error,
  },
  help: {
    title: 'Thông báo',
    icon: Help,
  },
  success: {
    title: 'Thông báo',
    icon: CheckCircle,
  },
  warning: {
    title: 'Cảnh báo',
    icon: Warning,
  },
  bell : {
    title: 'Thông báo',
    icon: Notifications,
  },
};
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}
const MessageContent = forwardRef(function (
  { title, type, message, onClose },
  ref,
) {
  const [isOpen, {  toggle }] = useDisclosure(true);
  const { Title, Icon, Type } = useMemo(
    function () {
      const Type = `Type-contained${capitalize(TYPES[type] ? type : 'bell')}`
      return {
        Title: title || (TYPES[type] ?? TYPES['bell']).title,
        Icon: (TYPES[type] ?? TYPES['bell']).icon,
        Type,
      };
    },
    [title, type],
  );
//   console.log(Title, Icon, Type)
  return (
    <SnackbarContent ref={ref} className={styles.root}>
      <Accordion
        disableGutters
        defaultExpanded
        expanded={isOpen}
        className={clsx(styles.body,Type)}

      >
        <AccordionSummary classes={{content:styles.content}}>
          <Stack direction="row" alignItems="center" width="100%" spacing={1}>
            <SvgIcon className={styles.icon} component={Icon} />
            <Typography variant="h6" flex="1" className={styles.title}>
              {Title}
            </Typography>
            <IconButton onClick={toggle}>
              <SvgIcon
                component={ExpandMore}
                className={clsx(styles.icon)}
                sx={{
                  transform: (isOpen && 'rotate(0deg)') || 'rotate(-90deg)',
                }}
              />
            </IconButton>
            <IconButton onClick={onClose}>
              <SvgIcon component={Close} />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0.5}}>
          <Paper sx={{ p: 0.5 }} variant="outlined">
            {message}
          </Paper>
        </AccordionDetails>
      </Accordion>
    </SnackbarContent>
  );
});

MessageContent.displayName = 'MessageContent';
MessageContent.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPES)),
};
export default memo(MessageContent);
