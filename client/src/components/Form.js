import React from "react";
import { Button } from "react-bootstrap";
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" rows="20" {...props} />
    </div>
  );
}

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

export function FormBtn(props) {
  return (
    <Button {...props} className="btn btn-info">
      {props.children}
    </Button>
  );
}
