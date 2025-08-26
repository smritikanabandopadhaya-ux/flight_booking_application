import React, { useState } from "react"
import "../Buttons/Button.css"

function Button({handleClick,name}){
  
 return(
  <button onClick={handleClick} className="button">{name}</button>
   );
}

 export default Button