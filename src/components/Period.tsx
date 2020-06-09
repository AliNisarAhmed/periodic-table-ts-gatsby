import React from "react";

interface IProps {
  value: number;
  onMouseEnterPeriod: (period: number) => void;
  onMouseLeavePeriod: () => void;
  focusedNumber: number;
}

const Period: React.FC<IProps> = ({
  value,
  onMouseEnterPeriod,
  onMouseLeavePeriod,
  focusedNumber,
}) => {
  return (
    <div
      className={`period ${focusedNumber === value ? "highlightGroup" : null}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{value || null}</p>
    </div>
  );

  function handleMouseEnter() {
    if (value) {
      onMouseEnterPeriod(value);
    }
  }

  function handleMouseLeave() {
    onMouseLeavePeriod();
  }
};

export default Period;
