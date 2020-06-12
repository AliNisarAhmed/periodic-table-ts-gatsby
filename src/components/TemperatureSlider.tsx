import React, { FocusEvent, KeyboardEvent, ChangeEvent } from "react";
import { convertToFahrenheit, tabIndex } from "../utils/helpers";
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
          className="slider__range"
          min={0}
          max={6000}
          value={temperature}
          onChange={onChange}
          onMouseDown={() => togglePhysicalState(true)}
          onMouseUp={() => togglePhysicalState(false)}
          tabIndex={tabIndex.temperatureSlider}
          onFocus={handleFocus}
          step={1}
          onKeyDown={handleKeyDown}
        />
        <input
          type="text"
          className="slider__text"
          value={temperature}
          onChange={handleTemperatureInput}
          tabIndex={tabIndex.temperatureInput}
          onFocus={handleTemperatureInputFocus}
          onBlur={handleBlur}
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

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  function handleTemperatureInputFocus(e: FocusEvent<HTMLInputElement>) {
    e.stopPropagation();
    togglePhysicalState(true);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    e.stopPropagation();
    togglePhysicalState(false);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;

    if (key === "Enter") {
      e.preventDefault();
    }
  }

  function handleTemperatureInput(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (value === "") {
      setTemperature(0);
    }
    const parsedNumber = parseInt(value);
    if (!Number.isNaN(parsedNumber) && parsedNumber <= 6000) {
      setTemperature(parsedNumber);
    }
  }
};

export default TemperatureSlider;
