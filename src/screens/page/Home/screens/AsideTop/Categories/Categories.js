import { memo, useEffect, useReducer, useState } from 'react';
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
import {routers, getAction } from '~/config/Router';
function Categories({ ...props }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const categoryServices = CategoryServices('home categories');
  useEffect(() => {
    setData(Array(5).fill(null));
    setLoading(true);
    const ourRequest = categoryServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: getAction(routers.product.category, { alias: item.Alias })
      }));
      setData(newdata);
      setLoading(false);
    });
    return ourRequest;
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
          {data.map(function (data, index) {
            return (
              <ListItem divider key={index} disablePadding>
                {
                  <ListItemButton
                    sx={{py:0.2}}
                    component={(data && !isLoading && NavLink) || 'button'}
                    to={(data && data.to) || '#'}
                  >
                    {(data && !isLoading && (
                      <ListItemText>{data && data.text}</ListItemText>
                    )) || <Skeleton  className='fullview'/>}
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
