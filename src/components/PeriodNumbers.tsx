import React from "react";
import Period from "./Period";

interface IProps {
  onMouseEnterPeriod: (period: number) => void;
  onMouseLeavePeriod: () => void;
  searchTerm: string;
}

const groups = Array.from({ length: 8 }, (x, i) => i);

const PeriodNumbers: React.FC<IProps> = ({
  onMouseEnterPeriod,
  onMouseLeavePeriod,
  searchTerm,
}) => {
  if (searchTerm) {
    return null;
  }

  return (
    <div className="periodNumbers">
      {groups.map(g => (
        <Period
          value={g}
          onMouseEnterPeriod={onMouseEnterPeriod}
          onMouseLeavePeriod={onMouseLeavePeriod}
          key={g}
        />
      ))}
    </div>
  );
};

export default PeriodNumbers;
