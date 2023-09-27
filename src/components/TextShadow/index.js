import React from "react";
import NavBar from "../NavBar";

export default function TextShadow() {
  return (
    <>
      <NavBar />
      <div className="polaris-layout">
        <div className="polaris-card">
          <div className="polaris-card-header">
            <h2 className="polaris-heading">Box-Shadow CSS Generator</h2>
          </div>
          <div className="polaris-card-section">
            <div className="polaris-formlayout">
              <div className="box">
                <label>Shift right: </label>
                <input className="shift-right" type="range" min={0} max={100} />

                <label>Shift down: </label>
                <input className="shift-down" type="range" min={0} max={100} />

                <label>Blur: </label>
                <input className="spread" type="range" min={0} max={100} />

                <label>Opacity: </label>
                <input className="opacity" type="range" min={0} max={100} />

                <label>Color</label>
                <input className="color" type="color" readOnly />
              </div>
            </div>
          </div>
          <div
            className="polaris-card-section"
            style={{ borderTop: "1px solid #333" }}
          ></div>
        </div>
      </div>
    </>
  );
}
