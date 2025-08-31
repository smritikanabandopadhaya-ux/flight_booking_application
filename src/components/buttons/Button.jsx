import React, { useState } from "react"
import "./Button.css"

function Button({handleClick,name}){
  
 return(
  <button onClick={handleClick} className="button">{name}</button>
   );
}

 export default Button