import {useMemo} from "react";
import { createSearchParams } from "react-router-dom";
class Controller {
  constructor(name,action) {
    this.name = name;
    this.action = action;
  }
}
class Route {
  constructor(name,controller) {
    this.name = name;
    this.controller = controller;
  }
}
const user = new Route("",{
	product:new Controller("",{
		index:"",
		detail:"chi-tiet-san-pham",
		category:"danh-muc-san-pham",
		brand:"thuong-hieu-san-pham",
		search:"tim-kiem-san-pham"
	}),category:new Controller("",{
		index:"danh-sach-danh-muc",
		search:"tim-kiem-danh-muc"
	}),brand:new Controller("",{
		index:"danh-sach-thuong-hieu",
		search:"tim-kiem-thuong-hieu"
	}),profile:new Controller("tai-khoan",{
		index:"thong-tin",
		orders:"don-hang",
		settings:"tuy-chon",
		message:"thong-bao"
	}),cart:new Controller("gio-hang",{
		index:""
	})
});

const admin = new Route("trang-quan-tri",{
	dashboard:new Controller("",{
		index:""
	}),product:new Controller("san-pham",{
		index:"danh-sach",
		add:"them",
		update:"cap-nhat"
	}),category:new Controller("danh-muc",{
		index:"danh-sach",
		add:"them",
		update:"cap-nhat"
	}),brand:new Controller("thuong-hieu",{
		index:"danh-sach",
		add:"them",
		update:"cap-nhat"
	}),order:new Controller("don-hang",{
		index:"danh-sach",
		shipment:"giao-hang",
		request:"phan-hoi",
		voucher:"ma-giam-gia"

	})
});

const routes = {
	user,admin
};

function getRoute(area,controller,action,params){
			let search;
			if(params){
				search = createSearchParams(params);
			}
			if(area !== undefined){
				let _area = routes[area];
				if(_area!= undefined){
					area = _area.name;
					if(controller !== undefined){
						let _controller = _area.controller[controller]
						if(_controller){
							controller = _controller.name
							if(action != undefined){
								if(_controller.action[action] != undefined){
									action = _controller.action[action];
								}
							}else if(_controller.action.index != undefined){
								action = _controller.action.index;
							}
						}
					}
				}
			}
			return `${area && "/"+area || ""}${controller && "/"+controller || ""}${action && "/"+action || ""}${search && "?"+search || ""}`;
		}
function getAreaName(area){
	if(area !== undefined){
		let _area = routes[area];
		if(_area != undefined){
			area = _area.name;
		}
	}
	return area;
}
function getControllerName(area,controller){
	if(area !== undefined){
		let _area = routes[area];
		if(_area != undefined){
			area = _area.name;
			if(controller !== undefined){
				let _controller = _area.controller[controller]
				if(_controller){
					return _controller.name
					
				}
			}
		}
	}
	return controller;
}
function getActionName(area,controller,action){
	if(area !== undefined){
		let _area = routes[area];
		if(_area != undefined){
			area = _area.name;
			if(controller !== undefined){
				let _controller = _area.controller[controller]
				if(_controller){
					return _controller.action[action]
					
				}
			}
		}
	}
	return controller;
}
export const useRoute = function(){
	return useMemo(function(){	
		return {routes,getRoute,getAreaName,getControllerName,getActionName}
	},[])
}