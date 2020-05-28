import React, { useState, useMemo } from "react";
import { IElement } from "../utils/types";
import Element from "./Element";
import { partition } from "ramda";
import ElementDetail from "./ElementDetail";
import Group from "./Group";
import GroupNumbers from "./GroupNumbers";

interface IProps {
  elements: IElement[];
  children?: any;
  searchTerm: string;
  highlighted: string | null;
}

export const PeriodicTable: React.FC<IProps> = ({
  elements,
  searchTerm,
  highlighted,
}) => {
  const [selectedElement, setSelectedElement] = useState<IElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [normalElements, innerTransitionMetals] = useMemo(
    () =>
      partition(
        e => e.category !== "actinide" && e.category !== "lanthanide",
        elements
      ),
    []
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
              <Element
                element={elem}
                highlighted={highlighted}
                openModal={openModal}
              />
            ))}
        </div>
      ) : (
        <React.Fragment>
          <div>
            <GroupNumbers />
            <div className="container">
              {normalElements.map(elem => (
                <Element
                  element={elem}
                  highlighted={highlighted}
                  openModal={openModal}
                />
              ))}
            </div>
            <div className="innerTransitionMetals">
              {innerTransitionMetals.map(elem => (
                <Element
                  element={elem}
                  highlighted={highlighted}
                  openModal={openModal}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
      <ElementDetail
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        element={selectedElement}
      />
    </React.Fragment>
  );

  function closeModal() {
    setSelectedElement(null);
    setIsModalOpen(false);
  }

  function openModal(elem: IElement) {
    setSelectedElement(elem);
    setIsModalOpen(true);
  }
};
