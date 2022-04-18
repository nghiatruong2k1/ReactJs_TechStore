import {useMemo} from "react";
import { createSearchParams } from "react-router-dom";
export const useRoute = function(){
	return useMemo(function(){
		const routes = {
			user:{
				product:{
					detail:"/chi-tiet-san-pham",
					category:"/danh-muc-san-pham",
					brand:"/thuong-hieu-san-pham",
					search:"/tim-kiem-san-pham"
				},
				category:{
					index:"/danh-sach-danh-muc",
					search:"/tim-kiem-danh-muc"
				},
				brand:{
					index:"/danh-sach-thuong-hieu",
					search:"/tim-kiem-thuong-hieu"
				},
				profile:{
					index:"/tai-khoan",
					order:"/don-hang",
					setting:"/tuy-chon",
				}
			},admin:{
				dashboard:{
					index:"/bang-quan-tri"
				}
			}
		};
		function getRoute(area,controller,action,params,feild){
			let search = "";
			let url = "";
			if(params){
				search = "?"+createSearchParams(params);
			}
			if(routes[area]){
				if(routes[area][controller]){
					if(routes[area][controller][action]){
						return `${routes[area][controller][action]}${search}`
					}
				}
			}
			return `${area && "/"+area || ""}${controller && "/"+controller || ""}${action && "/"+action || ""}${search}`
		}
		return {routes,getRoute}
	},[])
}