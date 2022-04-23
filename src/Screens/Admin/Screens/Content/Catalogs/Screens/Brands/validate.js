export const validateRuler = (function(){
	return {
		Name:{
			isRequired:["Vui lòng nhập tên thương hiệu!"],
			minLength:[10],
			maxLength:[100]
		}
	}
}());

