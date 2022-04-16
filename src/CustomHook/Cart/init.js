export const initData = {
	isOpen:false,
	datas:[]
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'open':{
			return{
				...prevState,
				isOpen:true
			}
		}
		case 'close':{
			return{
				...prevState,
				isOpen:false
			}
		}
		case 'set_price':{
			const carts = [...prevState.datas];
			if(Number(payload.SalePrice) && payload.SalePrice > 0){
	          		carts[payload.index].Price = payload.SalePrice
	          	}else if(Number(payload.Price) && payload.Price > 0){
	          		carts[payload.index].Price = payload.Price
	          	}else{
					carts[payload.index].Price = 0;
	          	}
	        return {
	        	...prevState,
	        	datas:carts
	        };
		}
		case 'add':{
			const carts = [...prevState.datas];
			const oldIndex = carts.findIndex(function(data){
	          return  data && (data.Id == payload.Id);
	        })
	        if(oldIndex > -1){
	          	carts[oldIndex].Quantity += payload.Quantity ?? 0;
	        }else{
	        	carts.push({
	        		Id:payload.Id,
	        		Quantity:payload.Quantity,
	        		Price:0
	        	});
	        }
	        return {
	        	...prevState,
	        	datas:carts
	        };
		}
		case 'delete':{
			const datas = [...prevState.datas];
			delete datas[payload];
	        return {
	        	...prevState,
	        	datas
	        }
		}
		case 'reset':{
			return{
				...prevState,
				datas:[],
			}
		}
		case 'clear':{
			const datas = prevState.datas.filter(function(data){
				if(data){
					return data
				}
			})
			return{
				...prevState,
				datas
			}
		}
		default:{
		console.log(key,{prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
		}
	}
};
