import React from "react";

interface IProps {
  group: string;
  text: string;
  setHighlighted: any;
}

const LegendItem: React.FC<IProps> = ({ group, text, setHighlighted }) => {
  return (
    <div
      className="legend__item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`legend__color legend__color--${group}`}></div>
      <div className="legend__text">{text}</div>
    </div>
  );

  function onMouseEnter(e: any) {
    setHighlighted(group);
  }

  function onMouseLeave(e: any) {
    setHighlighted(null);
  }
};

export default LegendItem;
