import {memo,createContext,useContext,useState,useEffect} from 'react';
import {DetailContext} from "../../provider";
export const CurrencyContext = createContext();
function CurrencyProvider({children,...props}){
	const [values,setValues] = useState([{
		key:"đ",
		text:"VNĐ"
	},{
		key:"$",
		text:"USD"
	},{
		key:"¥",
		text:"JDY"
	}]);
	const {data} = useContext(DetailContext);
	const {loading} = useContext(global.config.context);
	const handleValue = {
		change:function(event,obj){
			data.handle.set("currencyUnit",obj.props.value)
		}
	}
	return(
		<CurrencyContext.Provider value={{
			values:{get:values},
			value:{get:data.handle.get("currencyUnit",""),handle:handleValue}
		}}>
			{children}
		</CurrencyContext.Provider>
	)
}
export default memo(CurrencyProvider);