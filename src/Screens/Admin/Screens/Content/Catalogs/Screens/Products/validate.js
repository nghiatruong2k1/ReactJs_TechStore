export const validateRuler = (function(){
	return {
		Name:{
			isRequired:["Vui lòng nhập tên sản phẩm!"],
			minLength:[10],
			maxLength:[100]
		},ShortDes:{
			isRequired:["Vui lòng nhập mô tả ngắn!"]
		}
	}
}());

