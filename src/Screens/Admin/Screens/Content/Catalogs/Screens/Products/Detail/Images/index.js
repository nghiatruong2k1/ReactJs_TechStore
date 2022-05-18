import {memo,useContext,useEffect}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import DataGridView  from "../../../../Components/DataGrid/";
import {useGetData,useInitData} from "../../../../Components/DataGrid/provider";
import {DetailContext} from "../../../../Components/Detail/";
import {useFetch} from "../../../../../../../../../Config/Fetch/";
import {displays} from "./init";

export function useAddImage({}){
  const Fetch = useFetch();
  const {state,handle,dispath} = useContext(DetailContext);
}

function ProductImages({...props}){
  const Fetch = useFetch();
  const {state,handle,dispath} = useContext(DetailContext);
  const {image} = useContext(global.config.AppContext);

  const {option,...propsGet} = useInitData(function(){
    if(state.values && state.values.Id){
      return{
        controller:"productimage",
        params:{
          ProductId:state.values.Id
        }
      }
    }
  },[state.values]);
  useEffect(function(){
    console.log(propsGet.state.datas)
  },[propsGet.state.datas])

  return(
    <DataGridView  
      title="Hình ảnh"
      displays={displays}
      config={{
        empty:"Không có hình ảnh"
      }}
      option={{
        ...option,
        addProps:{
          onClick:function(){
            image.handle.open({
              onSubmit:function({value:{Name,Id,Url}}){
                propsGet && propsGet.handle && propsGet.handle.addData({
                  ImageId:Id,
                  ImageUrl:Url,
                  Alt:Name,
                  IsPublic:true,
                  IsTrash:false
                })
              }
            })
          }
        }
      }}
      {...props} 
      {...propsGet}/>
  )
}
export default memo(ProductImages);