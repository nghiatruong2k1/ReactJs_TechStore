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
		case 'set_data':{
			const carts = [...prevState.datas];
			const {index,Price,SalePrice,Name,Alias} = payload.data;
			if(carts[index]){
				if(Number(SalePrice) && Number(SalePrice) > 0){
					carts[index].Price = Number(SalePrice)
				}else if(Number(Price) && Number(Price) > 0){
					carts[index].Price = Number(Price)
				}else{
					carts[index].Price = 0;
				}

				carts[index].Name = Name;
				carts[index].Alias = Alias;
			}
	        return {
	        	...prevState,
	        	datas:carts
	        };
		}
		case 'set_quantity':{
			const carts = [...prevState.datas];
			if(carts[payload.index]){
				if(Number(payload.quantity)){
					carts[payload.index].Quantity = Number(payload.quantity);
				}
			}
	        return {
	        	...prevState,
	        	datas:carts
	        };
		}
		case 'add':{
			const carts = [...prevState.datas];
			const {Id,Name,Alias,Quantity,Price,SalePrice} = payload;
			const oldIndex = carts.findIndex(function(data){
	          return  data && (data.Id == Id);
	        })
	        if(oldIndex > -1){
	          	carts[oldIndex].Quantity += Quantity ?? 0;
	        }else{
	        	carts.push({
	        		Id,
					Name,
					Alias,
	        		Quantity,
	        		Price:SalePrice ?? Price ?? 0
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
