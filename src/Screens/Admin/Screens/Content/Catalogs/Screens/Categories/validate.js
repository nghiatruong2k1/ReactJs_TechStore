export const validateRuler = (function(){
	return {
		Name:{
			isRequired:["Vui lòng nhập tên danh mục!"],
			minLength:[10],
			maxLength:[100]
		}
	}
}());

