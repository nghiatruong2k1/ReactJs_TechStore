import { memo } from 'react';
import {
  List,ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Accordion,
  AccordionDetails,
} from '@mui/material/';
import {
  ArrowLeft,
  ArrowDropDown,
  RadioButtonUnchecked,
  RadioButtonChecked,
} from '@mui/icons-material/';
import styles from '../Navbar.module.css';
import NavbarItem from '../Item';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
function NavbarAccordion({ icon, text, subData }) {
  const [isOpen, {toggle}] = useDisclosure(false);
  return (
    <Accordion
      component={ListItem}
      divider
      disableGutters
      defaultExpanded
      expanded={isOpen}
      className={ clsx(styles.item,styles.accordion) }
    >
      <ListItemButton onClick={toggle} className={clsx(styles.button)}>
        <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>
        <ListItemText className={styles.text}>{text}</ListItemText>
        <ListItemIcon className={styles.icon}>
          {(isOpen && <ArrowDropDown />) || <ArrowLeft />}
        </ListItemIcon>
      </ListItemButton>
      <AccordionDetails className={styles.body}>
        <List disablePadding sx={{width:'100%'}}>
          {subData.map(function (data, index) {
            return (
              <NavbarItem
                icon={<RadioButtonUnchecked />}
                activeIcon={<RadioButtonChecked />}
                key={index}
                {...data}
              />
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
export default memo(NavbarAccordion);
