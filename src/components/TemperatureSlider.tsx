import React from "react";

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
          tabIndex={0}
          step={1}
        />
      </div>
      {showPhysicalState && (
        <div className="slider__info">
          <div className="slider__info--legend">
            <div className="physicalBox--legend solid">
              <span className="symbol">C</span>
            </div>
            <div className="physicalBox--legend liquid">
              <span className="symbol">Hg</span>
            </div>
            <div className="physicalBox--legend gas">
              <span className="symbol">H</span>
            </div>
            <div className="physicalBox--legend unknown">
              <span className="symbol">Rf</span>
            </div>
          </div>
          <div className="slider__info--temperature">
            <p>{temperature} K</p>
            <p>{Number(temperature) - 273} &deg;C</p>
            <p>{((Number(temperature) - 273) * 9) / 5 + 32} &deg;F</p>
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
