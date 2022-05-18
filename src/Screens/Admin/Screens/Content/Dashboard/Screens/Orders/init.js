export const initData = {
  datas:[],
  status:[],
  isLoading:false,
  inType:0
};
export function reducer(prevState,[key,payload]) {
  switch(key){
    case 'set':{
      return {
        ...prevState,
        ...payload
      }
    }
    case 'set_type':{
      return {
        ...prevState,
        inType:types[payload] && payload || 0
      }
    }
    case 'set_loading':{
      return {
        ...prevState,
        isLoading:Boolean(payload)
      }
    }
    case 'set_datas':{
      return {
        ...prevState,
        datas:(Array.isArray(payload)) && payload || []
      }
    }
    case 'set_status':{
      return {
        ...prevState,
        status:(Array.isArray(payload)) && payload || []
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

export const types = [
    {
      text:"Ngày",
      getLabel:function(time){
        const dt = new Date(time);
        return (dt.getDate())+"/"+(dt.getMonth()+1) +"/"+dt.getFullYear();
      },
      get:function(data,defaulItem,callbackResult){  
      }
    },{
      text:"Tháng",
      getLabel:function(time){
        const dt = new Date(time);
        return (dt.getMonth()+1) +"/"+dt.getFullYear();
      },
      get:function(data,defaulItem,callbackResult){
      }
    },{
      text:"Năm",
      getLabel:function(time){
        const dt = new Date(time);
        return dt.getFullYear()+"";
      },
      get:function(data,defaulItem,callbackResult){

      }    
    }
  ]

export const getInitData = function(data){
  const result = [];

  
  return result;
}