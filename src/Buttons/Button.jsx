import React, { useState } from "react"
import "../Buttons/Button.css"

function Button(props){
  
 return(
  <button className="button">{props.name}</button>
   );
}

 export default Button