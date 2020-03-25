import React from "react";
import { IElement } from "../utils/types";
import Element from "./Element";
import { partition } from "ramda";

interface IProps {
  elements: IElement[];
  children?: any;
}

export const ElementsList: React.FC<IProps> = ({ elements }) => {
  const [normalElements, innerTransitionMetals] = partition(
    e => e.category !== "actinide" && e.category !== "lanthanide",
    elements
  );

  return (
    <React.Fragment>
      <div className="container">
        {normalElements.map(elem => (
          <Element element={elem} />
        ))}
      </div>
      <div className="innerTransitionMetals">
        {innerTransitionMetals.map(elem => (
          <Element element={elem} />
        ))}
      </div>
    </React.Fragment>
  );
};
