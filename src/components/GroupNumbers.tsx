import React from "react";
import Group from "./Group";

interface IProps {
  onMouseEnterGroup: (period: number) => void;
  onMouseLeaveGroup: () => void;
}

const periods = Array.from({ length: 18 }, (x, i) => i + 1);

const GroupNumbers: React.FC<IProps> = ({
  onMouseEnterGroup,
  onMouseLeaveGroup,
}) => {
  return (
    <div className="groupNumbers">
      {periods.map(p => (
        <Group
          value={p}
          onMouseEnterGroup={onMouseEnterGroup}
          onMouseLeaveGroup={onMouseLeaveGroup}
          key={p}
        />
      ))}
    </div>
  );
};

export default GroupNumbers;
