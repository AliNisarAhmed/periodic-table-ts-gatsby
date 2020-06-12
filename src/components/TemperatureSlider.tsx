import React from "react";
import { convertToFahrenheit } from "../utils/helpers";
import SliderLegendItem from "./SliderLegendItem";

interface IProps {
  temperature: number | null;
  showPhysicalState: boolean;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
  togglePhysicalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemperatureSlider: React.FC<IProps> = ({
  temperature,
  setTemperature,
  togglePhysicalState,
  showPhysicalState,
}) => {
  return (
    <React.Fragment>
      <div className="slider__container">
        <input
          type="range"
          min={0}
          max={6000}
          value={temperature}
          onChange={onChange}
          onMouseDown={() => togglePhysicalState(true)}
          onMouseUp={() => togglePhysicalState(false)}
          tabIndex={-1}
          step={1}
        />
      </div>
      {showPhysicalState && (
        <div className="slider__info">
          <div className="slider__info--legend">
            <SliderLegendItem symbol="C" label="Solid" />
            <SliderLegendItem symbol="Hg" label="Liquid" />
            <SliderLegendItem symbol="H" label="Gas" />
            <SliderLegendItem symbol="Rf" label="Unknown" />
          </div>
          <div className="slider__info--temperature">
            <p>
              {temperature} <span className="slider__info--unit">K</span>
            </p>
            <p>
              {Number(temperature) - 273}
              <span className="slider__info--unit">&deg;C</span>
            </p>
            <p>
              {convertToFahrenheit(temperature)}{" "}
              <span className="slider__info--unit">&deg;F</span>
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTemperature(Number(e.target.value));
  }
};

export default TemperatureSlider;
