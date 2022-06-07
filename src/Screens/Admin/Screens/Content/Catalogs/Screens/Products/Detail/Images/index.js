import {memo,useContext,useEffect}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import DataGridView  from "../../../../Components/DataGrid/";
import {useGetData,useInitData} from "../../../../Components/DataGrid/provider";
import {DetailContext} from "../../../../Components/Detail/";
import {useFetch} from "../../../../../../../../../Config/Fetch/";
import {displays} from "./init";

export function useAddImages({controller}){
  const Fetch = useFetch();
  const {state,handle,dispath,events} = useContext(DetailContext);

  const propsGet = useInitData(function(){
    if(state.values && state.values.Id){
      return{
        controller:controller,
        params:{
          ProductId:state.values.Id
        }
      }
    }
  },[state.values.Id]);

  useEffect(function(){
    const handlePost = function({target}){
      target && target.data && target.data.value &&
      Array.isArray(propsGet.state.datas) && (propsGet.state.datas.length > 0) 
      && Fetch.post({
          api:`api/admin/${controller}/multiple`,
          params:propsGet.state.datas.map(function(data){
            return {
              ...data,
              ProductId:target.data.value.Id,
              Id:0
            }
          })
      })
    }
    events.add("SubmitThen",handlePost);
    return function(){
      events.remove("SubmitThen",handlePost);
    } 
  },[propsGet.state.datas])

  return {...propsGet}
}

export function useUpdateImages({controller}){
  const Fetch = useFetch();
  const {state,handle,dispath,events} = useContext(DetailContext);

  const propsGet = useGetData(function(){
    if(state.values && state.values.Id){
      return{
        controller:controller,
        params:{
          ProductId:state.values.Id
        }
      }
    }
  },[state.values.Id]);
  return {...propsGet}
}



function ProductImages({useHandleImage,...props}){
  const {state} = useContext(DetailContext);
  const {option,dataset,handle,...propsGet} = useHandleImage({
    controller:"productimage"
  });
  const {image} = useContext(global.config.AppContext);
  return(
    <DataGridView  
      title="Hình ảnh"
      displays={displays}
      config={{
        empty:"Không có hình ảnh"
      }}
      handle={{
        ...handle
      }}
      option={{
        ...option,
        addProps:{
          onClick:function(){
            image.handle.open({
              onSubmit:function({value:{Name,Id,Url}}){
                const data = {
                  ImageId:Id,
                  ImageUrl:Url,
                  Alt:Name,
                  ProductId:state.values && state.values.Id,
                  IsDefault:false,
                  IsPublic:true,
                  IsTrash:false
                };
                handle.addData && handle.addData(data)
              }
            })
          }
        }
      }}
      dataset={{
        ...dataset,
        enableEdit:true,
        updateProps:function(data,setLoading){
          return{
            hidden:true
          }
        }
      }}
      {...props} 
      {...propsGet}/>
  )
}
export default memo(ProductImages);