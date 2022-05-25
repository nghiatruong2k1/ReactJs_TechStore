import {memo,useContext,useMemo} from 'react';
import clsx from "clsx";

import {OptionButton} from "../../../../Components/";
function Toggle({onClick,...props}){
  return (
    <OptionButton
      onClick={onClick}
      title={"Menu"}
      icon={(<span className={clsx("fas fa-bars")}/>)}
      {...props}
    />
  )
}
export default memo(Toggle);