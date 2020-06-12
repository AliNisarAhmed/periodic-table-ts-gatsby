import React from "react";

interface IProps {
  symbol: string;
  label: string;
}

const SliderLegendItem: React.FC<IProps> = ({ symbol, label }) => {
  return (
    <div className="slider__info--legendItem">
      <div className={`physicalBox--legend ${label.toLowerCase()}`}>
        <span className="symbol">{symbol}</span>
      </div>
      <p className="physicalBox--label">{label}</p>
    </div>
  );
};

export default SliderLegendItem;
