import React from "react";
import Generator from "../Generator";
import Preview from "../Preview";
import NavBar from "../NavBar";

function TextShadown() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Generator />
          </div>
          <div className="col-6">
            <TextShadown />
          </div>
        </div>
      </div>
    </>
  );
}

export default TextShadown;
