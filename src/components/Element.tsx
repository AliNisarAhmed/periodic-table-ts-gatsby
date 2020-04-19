import React from "react";
import { IElement } from "../utils/types";

interface IProps {
  element: IElement;
  highlighted: string | null;
}

const Element: React.FC<IProps> = ({ element, highlighted }) => {
  return (
    <div
      key={element.name}
      className={`box ${element.symbol.toLowerCase()} ${element.group} ${
        highlighted === element.group ? "highlight" : null
      }`}
    >
      <span className="mass">{element.atomic_mass.toFixed(2)}</span>
      <span className="number">{element.number}</span>
      <span className="symbol">{element.symbol}</span>
      <span className="name">{element.name}</span>
    </div>
  );
};

export default Element;
