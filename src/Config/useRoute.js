import {useMemo} from "react";
export const useRoute = function(){
	return useMemo(function(){
		return{
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
				}
			}
		}
	},[])
}