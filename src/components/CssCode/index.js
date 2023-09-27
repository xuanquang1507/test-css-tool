import React from "react";
import "./cssCode.css";

function CssCode() {
  return (
    <>
      <div className="polaris-layout">
        <div className="polaris-card">
          <div className="polaris-card-header">
            <h2 className="polaris-heading">CSS code</h2>
          </div>
          <input
            className="css-value my-2"
            // style={{ border: "1px solid #333" }}
            type="text"
            style={{ width: "80%", marginLeft: "33px", paddingBottom: "30px" }}
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default CssCode;
