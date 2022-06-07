import {useMemo} from "react";
import { createSearchParams } from "react-router-dom";
class Action {
	constructor(name,params) {
	 	this.name = name ?? "";
	  this.params = params ?? {};
	}
	
  }
class Controller {
  constructor(name,action) {
    this.name = name ?? "";
    this.action = action ?? new Action();
  }
}
class Area {
  constructor(name,controller) {
    this.name = name ?? "";
    this.controller = controller ?? new Controller();
  }
}
const user = new Area("",{
	home:new Controller("",{
		index:new Action()
	}),product:new Controller("",{
		index:new Action(),
		detail:new Action("chi-tiet-san-pham/:alias"),
		category:new Action("danh-muc-san-pham/:alias"),
		brand:new Action("thuong-hieu-san-pham/:alias"),
		search:new Action("tim-kiem-san-pham/:query")
	}),category:new Controller("",{
		index:new Action("danh-sach-danh-muc"),
		search:new Action("tim-kiem-danh-muc/:query")
	}),brand:new Controller("",{
		index:new Action("danh-sach-thuong-hieu"),
		search:new Action("tim-kiem-thuong-hieu/:query")
	}),profile:new Controller("tai-khoan",{
		index:new Action("thong-tin"),
		orders:new Action("don-hang"),
		settings:new Action("tuy-chon"),
		message:new Action("thong-bao")
	}),cart:new Controller("gio-hang",{
		index:new Action(""),
		confirm:new Action("xac-nhan-don-hang/:id")
	}),post:new Controller("tin-tuc",{
		index:new Action("moi-nhat"),
		topic:new Action("chu-de/:alias")
	})
});

const admin = new Area("trang-quan-tri",{
	dashboard:new Controller("",{
		index:new Action()
	}),product:new Controller("san-pham",{
		index:new Action(""),
		add:new Action("them"),
		update:new Action("cap-nhat/:id")
	}),category:new Controller("danh-muc",{
		index:new Action(""),
		add:new Action("them"),
		update:new Action("cap-nhat/:id")
	}),brand:new Controller("thuong-hieu",{
		index:new Action(""),
		add:new Action("them"),
		update:new Action("cap-nhat/:id")
	}),order:new Controller("don-hang",{
		index:new Action(""),
		update:new Action("cap-nhat/:id"),
		add:new Action("them"),
		shipment:new Action("giao-hang"),
		request:new Action("phan-hoi"),
		voucher:new Action("ma-giam-gia")
	}),user:new Controller("nguoi-dung",{
		index:new Action("")
	})
});

const routes = {
	user,admin
};



export function getRoute(area,controller,action,params = {}){
	let url = [];
	if(area){
		url.push(getAreaName(area));
		if(controller){
			url.push(getControllerName(area,controller))
			if(action){
				url.push(getActionUrl(area,controller,action,params));	
			}else{
				url.push(getActionUrl(area,controller,"index",params));
			}
		}
	}
	return url.reduce(function(result,value){
		if(value){
			return result+="/"+value
		}
		return result;
	},"");
}
export function getRouteName(area,controller,action){
	let url = [];
	if(area){
		url.push(getAreaName(area));
		if(controller){
			url.push(getControllerName(area,controller))
			if(action){
				url.push(getActionName(area,controller,action));	
			}else{
				url.push(getActionName(area,controller,"index"));
			}
		}
	}
	return url.reduce(function(result,value){
		if(value){
			return result+="/"+value
		}
		return result;
	},"");
}

export function getArea(area){
	if(area){
		if(typeof(area) === "string"){
			let _area = routes[area];
			if(_area){
				return _area
			}		
		}else if(area instanceof Area){
			return area;
		}
		
	}	
	return null;
}
export function getAreaName(area){
	if(area){		
		if(typeof(area) === "string"){
			let _area = getArea(area);
			if(_area){
				area = _area.name;
			}	
			return area;
		}else if(area instanceof Area){
			area = area.name || "";
		}
	}
	return area ?? ""
}
export function getController(area,controller){
	if(controller){
		if(typeof(controller) === "string"){
			let _area = getArea(area);
			if(_area){
				let _controller = _area.controller[controller];
				if(_controller){
					return _controller;		
				}
			}	
		}else if(controller instanceof Controller){
			return controller;
		}
	}
	return null;
}
export function getControllerName(area,controller){
	if(controller){		
		if(typeof(controller) === "string"){
			let _controller = getController(area,controller);
			if(_controller){
				controller = _controller.name;
			}
			return controller;
		}else if(controller instanceof Controller){
			controller = controller.name || "";
		}	
	}
	return ""
}
export function getAction(area,controller,action){
	if(action){	
		if(typeof(action) === "string"){
			let _controller = getController(area,controller)
			if(_controller){
				let _action = _controller.action[action];
				if(_action){
					return _action;
				}		
			}
		}else if(action instanceof Action){
			return action;
		}	
	}
	return null;
}
export function getActionName(area,controller,action){
	if(action){		
		if(typeof(action) === "string"){
			let _action = getAction(area,controller,action);
			if(_action){
				action = _action.name;
			}
			return action
		}else if(action instanceof Action){
			action = action.name || "";
		}	
	}
	return ""
}
export function getActionUrl(area,controller,action,params = {}){
	if(action){		
		let _action;
		if(typeof(action) === "string"){
			_action = getAction(area,controller,action);
			if(!_action){
				_action = new Action(action);
			}
		}else if(action instanceof Action){
			_action = action;
		}	
		if(_action instanceof Action){
			if(typeof(params) !== "object"){
				params = {}
			}
			const newParams = {..._action.params,...params}
			const regex = (/\:[a-zA-Z]{1,}\?{0,1}/g)
			const newAction = (_action.name ?? "").split("/").reduce(function(result,value){
			  const args = value.match(regex);
			  if(args && Array.isArray(args)){
					args.forEach(function(arg){			
					  const key = arg.replace(":","");
					  result = result.replaceAll(arg,newParams[key]);
					  delete newParams[key];
					});
			  }
			  return result;
			},_action.name ?? "");
		
			const newSearch = createSearchParams(newParams);
			return `${newAction ?? ""}${Boolean(newSearch + "") && ("?"+newSearch)  || ""}`
		}
	}
	return ""
  }
export default function useRoute(){
	return useMemo(function(){	
		return {routes,getRoute,getAreaName,getControllerName,getActionName}
	},[])
}

