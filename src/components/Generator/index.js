import React, { useEffect, useState } from "react";
import "./generator.css";
import { Button } from "antd";
import { MenuOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CssCode from "../CssCode";

function Generator() {
  const [shiftRight, setShiftRight] = useState(0);
  const [shiftDown, setShiftDown] = useState(0);
  const [spread, setSpread] = useState(7);
  const [blur, setBlur] = useState(4);
  const [opacity, setOpacity] = useState(20);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [boxShadowValue, setBoxShadowValue] = useState("");
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    // Update the box-shadow whenever boxShadowColor changes
    updateCssValue(shiftRight, shiftDown, spread, blur, opacity, selectedColor);
  }, [shiftRight, shiftDown, spread, blur, opacity, selectedColor]);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
    updateCssValue(shiftRight, shiftDown, spread, blur, opacity, newColor);
  };

  const handleShiftRight = (e) => {
    const newValue = e.target.value;
    setShiftRight(newValue);
    updateCssValue(newValue, shiftDown, spread, blur, opacity);
  };

  const handleShiftDown = (e) => {
    const newValue = e.target.value;
    setShiftDown(newValue);
    updateCssValue(shiftRight, newValue, spread, blur, opacity);
  };

  const handleSpread = (e) => {
    const newValue = e.target.value;
    setSpread(newValue);
    updateCssValue(shiftRight, shiftDown, newValue, blur, opacity);
  };

  const handleBlur = (e) => {
    const newValue = e.target.value;
    setBlur(newValue);
    updateCssValue(shiftRight, shiftDown, spread, newValue, opacity);
  };

  const handleOpacity = (e) => {
    const newValue = e.target.value;
    setOpacity(newValue);
    updateCssValue(shiftRight, shiftDown, spread, blur, newValue);
  };

  const handleAddLayer = () => {
    // Thêm một lớp mới vào danh sách
    const newLayer = {
      shiftRight,
      shiftDown,
      spread,
      blur,
      opacity,
      boxShadowValue,
    };
    setLayers([...layers, newLayer]);
  };

  const handleLayerClick = (index) => {
    const selectedLayer = layers[index];
    setShiftRight(selectedLayer.shiftRight);
    setShiftDown(selectedLayer.shiftDown);
    setSpread(selectedLayer.spread);
    setBlur(selectedLayer.blur);
    setOpacity(selectedLayer.opacity);
    setBoxShadowValue(selectedLayer.boxShadowValue);
  };

  const handleDeleteLayer = (index) => {
    const updatedLayers = [...layers];
    updatedLayers.splice(index, 1);
    setLayers(updatedLayers);
  };

  const updateCssValue = (
    shiftRight,
    shiftDown,
    spread,
    blur,
    opacity,
    color
  ) => {
    if (color) {
      const red = parseInt(color.slice(1, 3), 16);
      const green = parseInt(color.slice(3, 5), 16);
      const blue = parseInt(color.slice(5, 7), 16);

      const boxShadowValue = `${shiftRight}px ${shiftDown}px ${spread}px ${blur}px rgba(${red}, ${green}, ${blue}, ${
        opacity / 100
      })`;

      setBoxShadowValue(boxShadowValue);
      const cssValueInput = document.querySelector(".css-value");
      cssValueInput.value = boxShadowValue;
      const box = document.querySelector(".react-resizable");
      box.style.boxShadow = boxShadowValue;
    }
  };

  return (
    <div className="polaris-layout">
      <div className="polaris-card">
        <div className="polaris-card-header">
          <h2 className="polaris-heading">Box-Shadow CSS Generator</h2>
        </div>
        <div className="polaris-card-section">
          <div className="polaris-formlayout">
            <div className="box">
              <label>Shift right: {shiftRight}</label>
              <input
                className="shift-right"
                type="range"
                min={0}
                max={100}
                value={shiftRight}
                onChange={handleShiftRight}
              />

              <label>Shift down: {shiftDown}</label>
              <input
                className="shift-down"
                type="range"
                min={0}
                max={100}
                value={shiftDown}
                onChange={handleShiftDown}
              />

              <label>Spread: {blur}</label>
              <input
                className="blur"
                type="range"
                min={0}
                max={100}
                value={blur}
                onChange={handleBlur}
              />

              <label>Blur: {spread}</label>
              <input
                className="spread"
                type="range"
                min={0}
                max={100}
                value={spread}
                onChange={handleSpread}
              />

              <label>Opacity: {opacity}</label>
              <input
                className="opacity"
                type="range"
                min={0}
                max={100}
                value={opacity}
                onChange={handleOpacity}
              />

              <label>Color</label>
              <input
                className="color"
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
              />
            </div>
          </div>
        </div>
        <div
          className="polaris-card-section"
          style={{ borderTop: "1px solid #333" }}
        >
          <Button
            className="polaris-button"
            type="primary"
            style={{ background: "blue" }}
            onClick={handleAddLayer}
          >
            Add Layer
          </Button>

          <ul className="layer_wrap">
            <li className="layer_current">
              <span>
                <MenuOutlined />
              </span>
              <span className="show-shadown">{boxShadowValue}</span>
              <div>
                <span className="action mx-3">
                  <EditOutlined />
                </span>
                <span className="action">
                  <DeleteOutlined onClick={handleDeleteLayer} />
                </span>
              </div>
            </li>

            {layers.map((layer, index) => (
              <li
                className="layer_current"
                key={index}
                onClick={() => handleLayerClick(index)}
              >
                <span>
                  <MenuOutlined />
                </span>
                <span className="show-shadown">{layer.boxShadowValue}</span>
                <div>
                  <span className="action mx-3">
                    <EditOutlined />
                  </span>
                  <span className="action">
                    <DeleteOutlined onClick={handleDeleteLayer} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Generator;
