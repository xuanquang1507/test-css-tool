import React from "react";
import Generator from "../Generator";
import Preview from "../Preview";
import NavBar from "../NavBar";

function PolarisPageContent() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-12">
            <Generator />
          </div>
          <div className="col-xl-6 col-12">
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
}

export default PolarisPageContent;
