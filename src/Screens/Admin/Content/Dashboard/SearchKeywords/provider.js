import {memo,useState,createContext} from 'react';
export const SearchKeywordsContext = createContext();
function SearchKeywordsProvider({children,...props}){
  const [pageIndex,setIndex] = useState(1);
  const [pageView,setView] = useState(5);
  const titles = [
    "Keyword","Count"
  ];
  const values = [{
    value:"phone",
    count:0
  },{
    value:"phone",
    count:1
  },{
    value:"phone",
    count:2
  },{
    value:"phone",
    count:3
  },{
    value:"phone",
    count:4
  },{
    value:"phone",
    count:5
  },{
    value:"phone",
    count:0
  },{
    value:"phone",
    count:0
  }];
	return(
		<SearchKeywordsContext.Provider value={{
			data:{titles,values},
			page:{get:pageIndex,set:setIndex},
			view:{get:pageView,set:setView}
		}}>
			{children}
		</SearchKeywordsContext.Provider>
	)
}
export default memo(SearchKeywordsProvider);