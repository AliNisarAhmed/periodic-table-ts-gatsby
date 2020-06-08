import React, { KeyboardEvent } from "react";

interface IProps {
  value: number;
  onMouseEnterGroup: (period: number) => void;
  onMouseLeaveGroup: () => void;
  focusedNumber: number;
}

const Group: React.FC<IProps> = ({
  value,
  onMouseEnterGroup,
  onMouseLeaveGroup,
  focusedNumber,
}) => {
  return (
    <div
      className={`group ${focusedNumber === value ? "highlightGroup" : null}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{value}</p>
    </div>
  );

  function handleMouseEnter() {
    if (value) {
      onMouseEnterGroup(value);
    }
  }

  function handleMouseLeave() {
    onMouseLeaveGroup();
  }
};

export default Group;
