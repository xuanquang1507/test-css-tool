import React, { useState } from "react";
import "./preview.css";
import CssCode from "../CssCode";
function Preview() {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [selectedColorChildren, setSelectedColorChildren] = useState("#00FFFF");

  const handleColorChangeChildren = (e) => {
    const newColor = e.target.value;
    setSelectedColorChildren(newColor);
  };

  const handleColorChangeBackground = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
  };

  return (
    <div className="polaris-layout">
      <div className="polaris-card">
        <div className="polaris-card-header">
          <h2 className="polaris-heading">Preview</h2>
          <div className="colorpicker">
            <input
              className="color-preview mx-2"
              type="color"
              value={selectedColor}
              onChange={handleColorChangeBackground}
            />
            <input
              className="color-preview"
              type="color"
              value={selectedColorChildren}
              onChange={handleColorChangeChildren}
            />
          </div>
        </div>
        <div
          className="polaris-card-section"
          style={{ background: selectedColor }}
        >
          <div
            className="react-resizable"
            style={{ background: selectedColorChildren }}
          ></div>
        </div>
      </div>
      <CssCode />
    </div>
  );
}

export default Preview;
