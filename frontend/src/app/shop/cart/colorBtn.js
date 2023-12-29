import React from "react";

export default function ColorBtn({colorSelect,colors}) {
    
  return <div className="color flex  mx-auto">
    {
        colors.map((color) => {
          return(  <div onClick={(event) => colorSelect(event) } className="color_btn w-6 h-6  rounded-full mx-2  border-gray-800"  style={{backgroundColor: color}}></div>)
        })
    }
 
  
</div>;
}
