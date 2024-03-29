import React from "react";

function Alert(props) {
    const capitalize = (text) => {
        let capText = text.toLowerCase()
        return capText.charAt(0).toUpperCase() + capText.slice(1)
        
    }
  return (
    <div style={{height: "50px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
    </div>
  );
}

export default Alert;
