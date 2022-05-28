import {memo,Fragment,useMemo} from 'react';
import FooterList from '../../Components/FooterList';
function FooterAccount(props){
  const {datas,isLoading} = useMemo(function(){
    return {
      datas:[
        {
          icon:(<i className="fas fa-user"></i>)
          ,text:"Trực tuyến:"
        },{
          icon:(<i className="fas fa-user"></i>)
          ,text:"Khách hàng:"
        },{
          icon:(<i className="fas fa-user"></i>)
          ,text:"Tổng:"
      }],isLoading:false
    }
  },[])
  return (
    <Fragment>
      <FooterList datas={datas} loading={isLoading} title="Khách hàng" {...props}/>
    </Fragment>
  )
};
export default memo(FooterAccount)