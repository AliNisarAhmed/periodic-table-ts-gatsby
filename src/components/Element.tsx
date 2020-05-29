import React from "react";
import { IElement } from "../utils/types";
import {
  setPeriodHighlightClassName,
  setGroupHighlightClassName,
} from "../utils/helpers";

interface IProps {
  element: IElement;
  highlighted: string | null;
  openModal: any;
  highlightedPeriod: number | null;
  highlightedGroup: number | null;
}

const Element: React.FC<IProps> = ({
  element,
  highlighted,
  openModal,
  highlightedPeriod,
  highlightedGroup,
}) => {
  const className = `box
    ${element.symbol.toLowerCase()} ${element.group}
    ${highlighted === null ? "" : highlighted === element.group ? "" : "dim"}
    ${setPeriodHighlightClassName(highlightedPeriod, element.period)}
    ${setGroupHighlightClassName(highlightedGroup, element.xpos)}
  `;

  return (
    <div
      key={element.name}
      className={className}
      onClick={() => openModal(element)}
    >
      <span className="mass">{element.atomic_mass.toFixed(2)}</span>
      <span className="number">{element.number}</span>
      <span className="symbol">{element.symbol}</span>
      <span className="name">{element.name}</span>
    </div>
  );
};

export default Element;
