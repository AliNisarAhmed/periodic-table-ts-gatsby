import React from "react";

interface IProps {
  value: number;
  onMouseEnterGroup: (period: number) => void;
  onMouseLeaveGroup: () => void;
}

const Group: React.FC<IProps> = ({
  value,
  onMouseEnterGroup,
  onMouseLeaveGroup,
}) => {
  return (
    <div
      className="group"
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
