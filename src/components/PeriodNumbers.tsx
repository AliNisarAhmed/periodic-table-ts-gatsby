import React, { useState, FocusEvent, KeyboardEvent } from "react";
import Period from "./Period";

interface IProps {
  onMouseEnterPeriod: (period: number) => void;
  onMouseLeavePeriod: () => void;
  searchTerm: string;
}

const periods = Array.from({ length: 8 }, (x, i) => i);

const PeriodNumbers: React.FC<IProps> = ({
  onMouseEnterPeriod,
  onMouseLeavePeriod,
  searchTerm,
}) => {
  const [focusedNumber, setFocusedNumber] = useState<number | null>(null);

  if (searchTerm) {
    return null;
  }

  return (
    <div
      className="periodNumbers"
      tabIndex={1}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onKeyDown={handleKeyDown}
    >
      {periods.map(g => (
        <Period
          value={g}
          onMouseEnterPeriod={onMouseEnterPeriod}
          onMouseLeavePeriod={onMouseLeavePeriod}
          key={g}
          focusedNumber={focusedNumber}
        />
      ))}
    </div>
  );

  function onFocusHandler(e: FocusEvent<HTMLDivElement>) {
    console.log("onFocus");
    setFocusedNumber(1);
  }

  function onBlurHandler(e: FocusEvent<HTMLDivElement>) {
    console.log("onBlur");
    setFocusedNumber(null);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const { key } = e;
    if (key === "ArrowUp") {
      const newValue = (focusedNumber - 1) % periods.length || 1;
      setFocusedNumber(newValue);
    } else if (key === "ArrowDown") {
      const newValue = (focusedNumber + 1) % periods.length || 1;
      setFocusedNumber(newValue);
    }
  }
};

export default PeriodNumbers;
