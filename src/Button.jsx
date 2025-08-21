import React, { useState } from "react"
import "./Button.css"

function Button(props){
  
 const { children }=props;
 return(
  <button className="button">{children}</button>
   );
}

 export default Button