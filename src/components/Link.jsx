import React from "react";
import "./Card.css";

function Link({
  id
}) {
if(id==="manuscript"){ 
  return (
    "https://forms.gle/cgGnNSwf1gS2QXhUA"
  );
}
else{
    return("https://docs.google.com/forms/d/e/1FAIpQLSecgCB2LtCqQU6G8sr1nzfrXdEwt_KjG2ZMuIRFDn6RHgO3TQ/viewform");
    
}
}
export default Link;
