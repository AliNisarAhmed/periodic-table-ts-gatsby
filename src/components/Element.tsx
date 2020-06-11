import React, { useRef, useEffect } from "react";
import { IElement } from "../utils/types";
import {
  setPeriodHighlightClassName,
  setGroupHighlightClassName,
  getPhysicalStateClass,
} from "../utils/helpers";

interface IProps {
  element: IElement;
  highlighted: string | null; // group selected in Legend
  openModal: any;
  highlightedPeriod: number | null;
  highlightedGroup: number | null;
  focusedElement: number | null; // element in focus by keyboard
  showPhysicalState: boolean;
  temperature: number;
}

const Element: React.FC<IProps> = ({
  element,
  highlighted,
  openModal,
  highlightedPeriod,
  highlightedGroup,
  focusedElement,
  showPhysicalState,
  temperature,
}) => {
  console.log("showPhysicalState :>> ", showPhysicalState);
  const className = showPhysicalState
    ? `physicalBox
    ${element.symbol.toLowerCase()}
    ${element.group}
    ${getPhysicalStateClass(temperature, element)}
    `
    : `box
    ${element.symbol.toLowerCase()}
    ${element.group}
    ${highlighted === null ? "" : highlighted === element.group ? "" : "dim"}
    ${setPeriodHighlightClassName(highlightedPeriod, element.period)}
    ${setGroupHighlightClassName(highlightedGroup, element.xpos)}
    ${focusedElement === element.number ? "boxFocused" : null}
  `;

  return (
    <div
      key={element.name}
      className={className}
      onClick={() => openModal(element)}
      role="button"
      aria-pressed="false"
    >
      <span className="mass">{element.atomic_mass.toFixed(2)}</span>
      <span className="number">{element.number}</span>
      <span className="symbol">{element.symbol}</span>
      <span className="name">{element.name}</span>
    </div>
  );
};

export default Element;
