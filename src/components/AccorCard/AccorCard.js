import { memo } from 'react';
import {
  Stack,
  Tooltip,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SvgIcon,
  Box,
} from '@mui/material/';
import { Feed, Add, Remove } from '@mui/icons-material/';
import styles from './AccorCard.module.css';
import { useDisclosure } from '@mantine/hooks';
function AccordionContent({ title, icon, option, children, open,color,...props }) {
  const [isOpen, { toggle }] = useDisclosure(open || false);
  return (
    <>
      <Box p={1} {...props}>
        <Accordion
          disableGutters
          defaultExpanded
          className={(styles.container)}
          sx={{ height: (isOpen && '100%') || 'auto' }}
          expanded={isOpen}
        >
          <AccordionSummary className={styles.sumary}>
            <Stack direction="row" alignItems="center" width="100%" spacing={1}>
              <SvgIcon component={icon || Feed} className={styles.icon} />
              <span style={{ flex: 1 }} className={styles.title}>
                {title}
              </span>
              {isOpen && option}
              <Tooltip title={(isOpen && 'Đóng') || 'Mở'} placement="top">
                <IconButton color='inherit' onClick={toggle}>
                  {(isOpen && <Remove />) || <Add />}
                </IconButton>
              </Tooltip>
            </Stack>
          </AccordionSummary>
          <Divider />
          <AccordionDetails className={styles.body}>{children}</AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
export default memo(AccordionContent);
