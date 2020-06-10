import React, { useState, useMemo, KeyboardEvent } from "react";
import { IElement } from "../utils/types";
import Element from "./Element";
import { partition } from "ramda";
import ElementDetail from "./ElementDetail";
import Group from "./Group";
import GroupNumbers from "./GroupNumbers";
import { getNextElement, ArrowDirection } from "../utils/helpers";

interface IProps {
  elements: IElement[];
  children?: any;
  searchTerm: string;
  highlighted: string | null;
  highlightedPeriod: number | null;
}

export const PeriodicTable: React.FC<IProps> = ({
  elements,
  searchTerm,
  highlighted,
  highlightedPeriod,
}) => {
  const [selectedElement, setSelectedElement] = useState<IElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [highlightedGroup, setHighlightedGroup] = useState<number | null>(null);

  const [focusedElement, setFocusedElement] = useState<number | null>(null);

  const [normalElements, innerTransitionMetals] = useMemo(
    () =>
      partition(
        e => e.category !== "actinide" && e.category !== "lanthanide",
        elements
      ),
    []
  );

  const searchedElements = elements.filter(elem =>
    elem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      {searchTerm.length > 0 ? (
        <div
          className="searchDisplay"
          onFocus={handleFocusInSearch(searchedElements[0])}
          onBlur={handleBlur}
          onKeyDown={handleKeyDownInSearch(searchedElements)}
          tabIndex={2}
        >
          {searchedElements.map(elem => (
            <Element
              element={elem}
              highlighted={highlighted}
              openModal={openModal}
              highlightedPeriod={null}
              highlightedGroup={null}
              key={elem.symbol}
              focusedElement={focusedElement}
            />
          ))}
        </div>
      ) : (
        <React.Fragment>
          <GroupNumbers
            onMouseEnterGroup={onMouseEnterGroup}
            onMouseLeaveGroup={onMouseLeaveGroup}
          />
          <div
            className="periodicTable"
            tabIndex={3}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          >
            <div className="container">
              {normalElements.map(elem => (
                <Element
                  element={elem}
                  highlighted={highlighted}
                  openModal={openModal}
                  highlightedPeriod={highlightedPeriod}
                  highlightedGroup={highlightedGroup}
                  key={elem.symbol}
                  focusedElement={focusedElement}
                />
              ))}
            </div>
            <div className="innerTransitionMetals">
              {innerTransitionMetals.map(elem => (
                <Element
                  element={elem}
                  highlighted={highlighted}
                  openModal={openModal}
                  highlightedPeriod={highlightedPeriod}
                  highlightedGroup={highlightedGroup}
                  key={elem.symbol}
                  focusedElement={focusedElement}
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

  function onMouseEnterGroup(group: number) {
    setHighlightedGroup(group);
  }

  function onMouseLeaveGroup() {
    setHighlightedGroup(null);
  }

  function handleFocus() {
    setFocusedElement(1);
  }

  function handleBlur() {
    if (!isModalOpen) {
      setFocusedElement(null);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const { key } = e;
    if (key === "Enter") {
      setSelectedElement(elements.find(e => e.number === focusedElement));
      setIsModalOpen(true);
    } else if (key in ArrowDirection) {
      const nextElement = getNextElement(
        elements,
        focusedElement,
        key as ArrowDirection
      );
      setFocusedElement(nextElement?.number);
    }
  }

  function handleFocusInSearch(elem: IElement) {
    return () => setFocusedElement(elem.number);
  }

  function handleKeyDownInSearch(searchedElements: IElement[]) {
    return (e: KeyboardEvent<HTMLDivElement>) => {
      const { key } = e;
      const currentElement = searchedElements.findIndex(
        e => e.number === focusedElement
      );

      let newIndex: number;

      if (key === "ArrowRight") {
        newIndex = (currentElement + 1) % searchedElements.length;
        setFocusedElement(searchedElements[newIndex].number);
      } else if (key === "ArrowLeft") {
        newIndex =
          currentElement - 1 < 0
            ? searchedElements.length - 1
            : currentElement - 1;
        setFocusedElement(searchedElements[newIndex].number);
      } else if (key === "Enter") {
        setSelectedElement(elements.find(e => e.number === focusedElement));
        setIsModalOpen(true);
      }
    };
  }
};
