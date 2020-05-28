import React from "react";

interface IProps {
  value: number;
  onMouseEnterPeriod: (period: number) => void;
  onMouseLeavePeriod: () => void;
}

const Period: React.FC<IProps> = ({
  value,
  onMouseEnterPeriod,
  onMouseLeavePeriod,
}) => {
  return (
    <div
      className="period"
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
