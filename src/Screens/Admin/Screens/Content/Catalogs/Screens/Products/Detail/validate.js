export const validateProduct = (function(){
	return {
		Name:{
			isRequired:["Vui lòng nhập tên sản phẩm!"],
			maxLength:[100]
		},ShortDes:{
			isRequired:["Vui lòng nhập mô tả ngắn!"]
		},Price:{
			maxNumber:[100000000],
			minNumber:[0]
		},SalePrice:{
			maxNumber:[100000000],
			minNumber:[0]
		}
	}
}());

