import React, { useState, FocusEvent, KeyboardEvent } from "react";
import Period from "./Period";

interface IProps {
  onMouseEnterPeriod: (period: number) => void;
  onMouseLeavePeriod: () => void;
  searchTerm: string;
}

const periods = Array.from({ length: 8 }, (x, i) => i);

// The numbers on the left, along the y axis
const PeriodNumbers: React.FC<IProps> = ({
  onMouseEnterPeriod,
  onMouseLeavePeriod,
  searchTerm,
}) => {
  // this represents the period number currently focused by the keyboard
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
    setFocusedNumber(0);
  }

  function onBlurHandler(e: FocusEvent<HTMLDivElement>) {
    setFocusedNumber(null);
    onMouseLeavePeriod();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const { key } = e;
    if (key === "ArrowUp") {
      const newValue =
        focusedNumber === 0 || focusedNumber === 1
          ? periods.length - 1
          : focusedNumber - 1;
      setFocusedNumber(newValue);
      onMouseEnterPeriod(newValue);
    } else if (key === "ArrowDown") {
      const newValue = (focusedNumber % (periods.length - 1)) + 1;
      setFocusedNumber(newValue);
      onMouseEnterPeriod(newValue);
    } else if (key === "Escape") {
      setFocusedNumber(0);
      onMouseLeavePeriod();
    }
  }
};

export default PeriodNumbers;
