import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { Post } from '~/utils/HttpRequest';
import useServices from '../DefaultServices';

const API = '/api/auth';
export default function AuthServices(location) {
  const services = useServices(location);
  const [cookies,setCookies,deleteCookies] = useCookies(["token"])
  const login = useCallback((params, onThen) => {
    return services.getServices({
      api: API+'/login',
      method:Post,  
      params,
      onThen:(data)=>{
        if(data.token){
          setCookies("token",data.token);
          onThen && onThen(data.token);
        }else{
          onThen && onThen(null);
        }
      },
      onCatch: () => {
        onThen && onThen(null);
      },location
    });
  }, []);
  const register = useCallback((params, onThen) => {
    return services.getServices({
      api: API+'/register',
      method:Post,  
      params:{...params,Id:0},
      onThen:(data)=>{
        if(data.token){
          setCookies("token",data.token);
          onThen && onThen(data.token);
        }else{
          onThen && onThen(null);
        }
      },
      onCatch: () => {
        onThen && onThen(null);
      },location
    });
  }, []);
  const logout = useCallback(()=>{
    console.log('logout')
    deleteCookies("token");
  },[])
  return { login,register,logout };
}

