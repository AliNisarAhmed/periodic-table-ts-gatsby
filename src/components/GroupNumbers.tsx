import React from "react";
import Group from "./Group";

interface IProps {}

const periods = Array.from({ length: 18 }, (x, i) => i + 1);

const GroupNumbers: React.FC<IProps> = props => {
  return (
    <div className="groupNumbers">
      {periods.map(p => (
        <Group value={p} />
      ))}
    </div>
  );
};

export default GroupNumbers;
