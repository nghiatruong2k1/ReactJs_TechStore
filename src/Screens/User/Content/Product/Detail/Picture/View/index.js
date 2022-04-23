import {memo,useContext} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Frame,Image} from "../../../../../../../Components/";
import {DetailContext} from "../../provider";
import InfoBookmask from "./Bookmask";
function PictureView({...props}){
  const {state} = useContext(DetailContext);
  return(
    <Frame square loading={state.isLoading}>
      <InfoBookmask price={state.data && state.data.Price} salePrice={state.data && state.data.SalePrice}/>
      <Image contain src={!state.isLoading && state.data && state.data.ImageUrl} />
    </Frame>
  )
}
export default memo(PictureView);