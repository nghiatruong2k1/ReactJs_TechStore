import {memo,Fragment} from 'react';
import {Box,Container,Grid,List,ListSubheader,ListItem,ListItemButton,ListItemIcon,ListItemText,Skeleton} from '@mui/material/';
import {NavLink} from "react-router-dom"
import styles from './styles.module.css';

import getBrands from "./Brands/";
import getCategories from "./Categories/";
import getHelps from "./Helps/";
import getAccount from "./Account/";
import getSocial from "./Social/";

function FooterList({title,getDatas,...props}){
  const [datas,isLoading] = getDatas();
  return(
    <Grid item {...props}>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
           {title}
          </ListSubheader>
        }
      >
        {
          Array.isArray(datas) && 
          datas.map(function(data,index){
            return(
              <ListItem disablePadding key={index}> 
                <ListItemButton component={(Boolean(data) && !isLoading) && NavLink || "span"} to={data && data.to || ""}>
                  {
                    (Boolean(data) && !isLoading) && (
                    <>
                      <ListItemIcon>{data && data.icon}</ListItemIcon>
                      <ListItemText>{data && data.text}</ListItemText>
                    </>
                    ) ||
                      <Skeleton variant='text' className="skeleton" />
                  } 
                </ListItemButton>
              </ListItem>
            )
          })
        }

      </List>
    </Grid>
  )
}
function Footer({...props}){
  return(
  <Box component="section" className={styles.section} pb={10}>
    <Container maxWidth="xxl" component="footer" className={styles.container}>
        <Grid container columnSpacing={2} rowSpacing={1}>
            <FooterList title="Trợ giúp:"  getDatas={getHelps} xs={12} sm={6} lg={3} xl="auto"/>
            <FooterList title="Thương hiệu:" getDatas={getBrands} xs={12} sm={6} lg={3} xl="auto"/>
            <FooterList title="Danh mục:" getDatas={getCategories} xs={12} sm={6} lg={3} xl="auto"/>
            <FooterList title="Tài khoản:" getDatas={getAccount} xs={12} sm={6} lg={3} xl="auto"/>
            <FooterList title="Mạng xã hội:" getDatas={getSocial} xs={12} xl="auto"/>
        </Grid> 
    </Container>
  </Box>
  )
}
export default memo(Footer);