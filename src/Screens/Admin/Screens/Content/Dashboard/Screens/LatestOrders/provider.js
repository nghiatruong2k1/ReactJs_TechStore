import {memo,useState,createContext} from 'react';
export const LatestOrdersContext = createContext();
function LatestOrdersProvider({children,...props}){
  const [pageIndex,setIndex] = useState(1);
  const [pageView,setView] = useState(5);
  const titles = [
    "","Status","Customer","Created on","View"
  ];
  const values = [{
    status:"Complete",
    customer:"Victoria Terces 1",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 2",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 3",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 4",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 5",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 6",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 7",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 8",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 9",
    created:"03/13/2017 6:20:10 AM"
  },{
    status:"Complete",
    customer:"Victoria Terces 10",
    created:"03/13/2017 6:20:10 AM"
  }];
	return(
		<LatestOrdersContext.Provider value={{
			data:{titles,values},
			page:{get:pageIndex,set:setIndex},
			view:{get:pageView,set:setView}
		}}>
			{children}
		</LatestOrdersContext.Provider>
	)
}
export default memo(LatestOrdersProvider);