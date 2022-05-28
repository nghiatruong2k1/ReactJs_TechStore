import {memo,Fragment,useMemo} from 'react';

import FooterList from '../../Components/FooterList';
function FooterSocial(props){
  const {datas,isLoading} = useMemo(function(){
    return {
      datas:[{
          icon:(<i className="fab fa-facebook"></i>)
          ,text:"Facebook"
        },{
          icon:(<i className="fab fa-twitter"></i>)
          ,text:"Twitter"
        },{
          icon:(<i className="fab fa-instagram"></i>)
          ,text:"Instagram"
        },{
          icon:(<i className="fab fa-youtube"></i>)
          ,text:"Youtube"
      }],isLoading:false
    }
  },[])
  return (
    <Fragment>
      <FooterList datas={datas} loading={isLoading} title="Mạng xã hội" {...props}/>
    </Fragment>
  )
};
export default memo(FooterSocial)
