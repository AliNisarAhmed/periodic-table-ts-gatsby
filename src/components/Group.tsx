import React from "react";

interface IProps {
  value: number;
}

const Group: React.FC<IProps> = props => {
  return (
    <div className="group">
      <p>{props.value}</p>
    </div>
  );
};

export default Group;
