import {memo,createContext} from 'react';

import {useNavigate} from 'react-router-dom';
import {getRoute} from "../../../../../Config/Route/";
export const SearchContext = createContext({});
function SearchProvider({state,dispath,children,...props}){
	const navigator = useNavigate();
	function handleSubmit(event){
		event.preventDefault();
		if(state.query.trim() != ""){
		  dispath(['set_query',""])
		  navigator({
			pathname:getRoute("user",state.controller,"search",{query:state.query}),
			search: ""
		  });
		}
	}
	return(
		<SearchContext.Provider value={{state,dispath,onSubmit:handleSubmit}}>
			{children}
		</SearchContext.Provider>
	)
}
export default memo(SearchProvider);