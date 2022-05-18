export const initData = {
  isLoading:false,
  values:{},
  valids:{}
};
export function reducer(prevState,[key,payload]) {
  switch(key){
    case 'set_loading':{
      return {
        ...prevState,
        isLoading:Boolean(payload)
      }
    }
    case 'set_values':{
      return {
        ...prevState,
        values:(typeof(payload) === 'object') && payload || {}
      }
    }
    case 'change_values':{
      if(typeof(payload) === 'object'){
        return{
          ...prevState,
          values:{
            ...prevState.values,
            ...payload
          }
        }
      }
      return{
        ...prevState
      }
    }
    case 'change_valids':{
      if(typeof(payload) === 'object'){
        return{
          ...prevState,
          valids:{
            ...prevState.valids,
            ...payload
          }
        }
      }
      return{
        ...prevState
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