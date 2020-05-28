import React from "react";

interface IProps {
  value: number;
}

const Period: React.FC<IProps> = props => {
  return (
    <div className="period">
      <p>{props.value}</p>
    </div>
  );
};

export default Period;
