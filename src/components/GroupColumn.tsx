import React from "react";
import Group from "./Group";

interface IProps {}

const groups = Array.from({ length: 8 }, (x, i) => i);

const GroupColumn: React.FC<IProps> = props => {
  return (
    <div className="groupColumn">
      {groups.map(g => (
        <Group value={g} />
      ))}
    </div>
  );
};

export default GroupColumn;
