import {memo,Fragment,useMemo,useContext} from 'react';
import {formatAlias,formatDate} from "../../../../../config/Format";
import {AddImageContext} from "../../provider";
function Component(props){
    const {dispath} = useContext(AddImageContext); 
    const handleInput = useMemo(function(){
        return function(e){
            Array.from(e.target.files).forEach((file)=>{
                const data = {
                    IsTrash:false,
                    IsPublic:true,
                    Size:file.size,
                    Name:formatAlias(`${formatDate(new Date())}_${file.name}`),
                    File:file
                }
                dispath(["add",data]);
                const reader = new FileReader();
                const promise = new Promise((resolve, reject) => {
                    reader.readAsDataURL(data.File);
                    reader.onloadstart = (e) => {
                        data.Url="";
                        data.Error="";
                        data.loaded = 0;
                        dispath(["update"]);
                    }
                    reader.onprogress = (e) =>{
                        data.loaded = e.loaded;
                        dispath(["update"]);
                    }
                    reader.onload = (e) => resolve(e.target.result);
                    reader.onerror = error => reject(error);
                  });
                promise.then((res)=>{
                    data.Url = res;
                    dispath(["update"]);
                });
                promise.catch((error)=>{
                    data.Error = error;
                    dispath(["update"]);
                })
            })
            e.target.value = null;
        }
    },[])

    return (
        <form encType="multipart/form-data">
            <input type="file"
                onInput={handleInput}
                accept="image/*"
                multiple
                style={{
                    opacity:0,
                    position:'absolute',
                    inset:0
                }}/>
        </form>
    )
};export default memo(Component)
/*
                
                 */