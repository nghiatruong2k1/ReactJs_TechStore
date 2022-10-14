import {
    Error,
    CheckCircle,
    Warning,
    Notifications,
    Help,
  } from '@mui/icons-material/';
export const typeToast = {
  error: {
    title: 'Có lỗi',
    icon: <Error />,
    className: 'type-containedError',
  },
  help: {
    title: 'Thông báo',
    icon: <Help />,
    className: 'type-containedHelp',
  },
  success: {
    title: 'Thông báo',
    icon: <CheckCircle />,
    className: 'type-containedSuccess',
  },
  warning: {
    title: 'Cảnh báo',
    icon: <Warning />,
    className: 'type-containedWarning',
  },
  bell: {
    title: 'Thông báo',
    icon: <Notifications />,
    className: 'type-containedBell',
  },
};
