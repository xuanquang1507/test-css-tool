import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./textShadow.css";
import { Button } from "antd";
import { MenuOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function TextShadow() {
  const [shiftRight, setShiftRight] = useState(10);
  const [shiftDown, setShiftDown] = useState(20);
  const [blur, setBlur] = useState(4);
  const [opacity, setOpacity] = useState(20);
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [boxShadowValue, setBoxShadowValue] = useState("");
  const [layers, setLayers] = useState([]);
  const [selectedColorChildren, setSelectedColorChildren] = useState("#FF0000");

  useEffect(() => {
    updateBoxShadowValue();
  }, []);

  const updateBoxShadowValue = () => {
    const boxShadow = `${shiftRight}px ${shiftDown}px ${blur}px rgba(0, 0, 0, ${
      opacity / 100
    })`;
    setBoxShadowValue(boxShadow);
  };

  const handleShiftRight = (e) => {
    const newValue = e.target.value;
    setShiftRight(newValue);
    updateBoxShadowValue();
  };

  const handleShiftDown = (e) => {
    const newValue = e.target.value;
    setShiftDown(newValue);
    updateBoxShadowValue();
  };

  const handleBlur = (e) => {
    const newValue = e.target.value;
    setBlur(newValue);
    updateBoxShadowValue();
  };

  const handleOpacity = (e) => {
    const newValue = e.target.value;
    setOpacity(newValue);
    updateBoxShadowValue();
  };

  const handleAddLayer = () => {
    // Thêm một lớp mới vào danh sách
    const newLayer = {
      shiftRight,
      shiftDown,
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
    setBlur(selectedLayer.blur);
    setOpacity(selectedLayer.opacity);
    setBoxShadowValue(selectedLayer.boxShadowValue);
  };

  const handleDeleteLayer = (index) => {
    const updatedLayers = [...layers];
    updatedLayers.splice(index, 1);
    setLayers(updatedLayers);
  };

  const handleColorChangeChildren = (e) => {
    const newColor = e.target.value;
    setSelectedColorChildren(newColor);
  };

  const handleColorChangeBackground = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
  };

  return (
    <div className="container">
      <NavBar />
      <div className="text-shadown row">
        <div id="polaris-layout-text" className="polaris-layout col-xl-6 col-12">
          <div className="polaris-card">
            <div className="polaris-card-header">
              <h2 className="polaris-heading">Text-Shadow CSS Generator</h2>
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

                  <label>Blur: {blur}</label>
                  <input
                    className="blur"
                    type="range"
                    min={0}
                    max={100}
                    value={blur}
                    onChange={handleBlur}
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
                  <input className="color" type="color" readOnly />
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
            <div
              className="polaris-card-section"
              style={{ borderTop: "1px solid #333" }}
            ></div>
          </div>
        </div>
        <div className="polaris-layout col-xl-6 col-12">
          <div className="polaris-card">
            <div className="polaris-card-header">
              <h2 className="polaris-heading">Preview</h2>
              <div className="colorpicker">
                <input className="color-preview mx-2" type="color" onChange={handleColorChangeBackground} value={selectedColor}/>
                <input className="color-preview" type="color"  onChange={handleColorChangeChildren} value={selectedColorChildren}/>
              </div>
            </div>
            <div className="polaris-card-section" style={{backgroundColor: selectedColor}}>
              <div
                className="preview-text"
                style={{ textShadow: boxShadowValue, color: selectedColorChildren }}
              >
                Thúy Hằng
              </div>
            </div>
          </div>

          {/* CssCode */}
          <div className="polaris-layout">
            <div className="polaris-card">
              <div className="polaris-card-header">
                <h2 className="polaris-heading">CSS code</h2>
              </div>
              <input
                className="css-value-textShadown my-2"
                // style={{ border: "1px solid #333" }}
                type="text"
                style={{
                  width: "80%",
                  marginLeft: "33px",
                  paddingBottom: "30px",
                }}
                value={boxShadowValue}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
