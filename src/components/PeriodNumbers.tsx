import React from "react";
import Period from "./Period";

interface IProps {}

const groups = Array.from({ length: 8 }, (x, i) => i);

const PeriodNumbers: React.FC<IProps> = props => {
  return (
    <div className="periodNumbers">
      {groups.map(g => (
        <Period value={g} />
      ))}
    </div>
  );
};

export default PeriodNumbers;
