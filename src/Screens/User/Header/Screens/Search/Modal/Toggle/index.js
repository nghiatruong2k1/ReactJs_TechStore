import {memo} from 'react';
import clsx from "clsx";

import {OptionButton} from "../../../../Components/";
function Toggle({onClick,...props}){
  return (
    <OptionButton
      onClick={onClick}
      title={"Tìm kiếm"}
      icon={(<span className={clsx("fas fa-search")}/>)}
      {...props}
    />
  )
}
export default memo(Toggle);