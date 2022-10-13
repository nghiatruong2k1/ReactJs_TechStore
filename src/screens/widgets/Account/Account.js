import {memo,Fragment,useMemo} from 'react';
import { ListNav } from '~/components';
function FooterAccount(props){
  const {datas,isLoading} = useMemo(function(){
    return {
      datas:[
        {
          icon:(<span className="fas fa-user" />)
          ,text:"Trực tuyến:"
        },{
          icon:(<span className="fas fa-user" />)
          ,text:"Khách hàng:"
        },{
          icon:(<span className="fas fa-user" />)
          ,text:"Tổng:"
      }],isLoading:false
    }
  },[])
  return (
    <Fragment>
      <ListNav datas={datas} loading={isLoading} title="Khách hàng" {...props}/>
    </Fragment>
  )
};
export default memo(FooterAccount)