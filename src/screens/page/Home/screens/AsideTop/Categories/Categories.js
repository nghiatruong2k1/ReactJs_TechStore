import { memo, useEffect, useState } from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Skeleton,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import CategoryServices from '~/services/category';
import { routers } from '~/config/Router';
import { useInitLoading } from '~/hooks/Loading';
function Categories({ ...props }) {
  const categoryServices = CategoryServices('home categories');
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(5).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = categoryServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: routers.product.category.getAction( { alias: item.Alias }),
      }));
      setData(newdata);
      ourLoading();
    });
    return ()=>{
      ourRequest();
      setData(Array(5).fill(null));
    };
  }, []);
  return (
    <>
      <Grid item {...props}>
        <List
          disablePadding
          sx={{ width: '100%' }}
          subheader={
            <ListSubheader
              align="center"
              disableGutters
              disableSticky
              component="h6"
            >
              Danh mục
            </ListSubheader>
          }
        >
          {data.map((item, index) => {
            return (
              <ListItem divider key={index} disablePadding>
                {
                  <ListItemButton
                    sx={{ py: 0.2 }}
                    component={(item && !loading && NavLink) || 'button'}
                    to={(item && item.to) || '#'}
                  >
                    {(item && !loading && (
                      <ListItemText>{item && item.text}</ListItemText>
                    )) || <Skeleton className="fullview" />}
                  </ListItemButton>
                }
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </>
  );
}
export default memo(Categories);
