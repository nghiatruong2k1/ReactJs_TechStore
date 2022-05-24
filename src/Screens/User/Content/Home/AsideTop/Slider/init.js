export const initData = {
	datas:[{
    	src:"/images/banners/slide1.png"
	  },{
	    src:"/images/banners/slide2.png"
	  },{
	    src:"/images/banners/slide1.png"
	  },{
	    src:"/images/banners/slide2.png"
	  },{
	    src:"/images/banners/slide1.png"
	  },{
	    src:"/images/banners/slide2.png"
	  },{
	    src:"/images/banners/slide1.png"
	  },{
	    src:"/images/banners/slide2.png"
	  },{
	    src:"/images/banners/slide1.png"
	  },{
	    src:"/images/banners/slide2.png"
	  },{
	    src:"/images/banners/slide1.png"
	  },{
	    src:"/images/banners/slide2.png"
	  }
	],index:0
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
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
