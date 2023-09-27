import React from "react";
import Generator from "../Generator";
import NavBar from "../NavBar";

function TextShadown() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Generator />
          </div>
          <div className="col-6">
            tôi là xuân quảng
          </div>
        </div>
      </div>
    </>
  );
}

export default TextShadown;
