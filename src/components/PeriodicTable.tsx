import React from "react";
import { IElement } from "../utils/types";
import Element from "./Element";
import { partition } from "ramda";

interface IProps {
  elements: IElement[];
  children?: any;
  searchTerm: string;
}

export const PeriodicTable: React.FC<IProps> = ({ elements, searchTerm }) => {
  const [normalElements, innerTransitionMetals] = partition(
    e => e.category !== "actinide" && e.category !== "lanthanide",
    elements
  );

  return (
    <React.Fragment>
      {searchTerm.trim() ? (
        <div className="searchDisplay">
          {elements
            .filter(elem =>
              elem.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(elem => (
              <Element element={elem} />
            ))}
        </div>
      ) : (
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
      )}
    </React.Fragment>
  );
};
