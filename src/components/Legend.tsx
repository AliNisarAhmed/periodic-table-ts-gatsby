import React, { useState, KeyboardEvent } from "react";
import LegendItem from "./LegendItem";
import { ILegendItem } from "../utils/types";

interface IProps {
  setHighlighted: any;
}

const legendItems: ILegendItem[] = [
  { group: "metal", text: "Metal" },
  { group: "nonmetal", text: "Non Metal" },
  { group: "halogen", text: "Halogens" },
  { group: "noble_gas", text: "Nobel Gasses" },
  { group: "alkali_metal", text: "Alkali Metal" },
  { group: "transition_metal", text: "Transition Metal" },
  { group: "alkaline_earth_metal", text: "Alkaline Earth Metal" },
  { group: "metalloid", text: "Metalloids" },
  { group: "lanthanoid", text: "Lanthanides" },
  { group: "actinoid", text: "Actinides" },
];

const Legend: React.FC<IProps> = ({ setHighlighted }) => {
  const [legendOpen, setLegendOpen] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  return (
    <React.Fragment>
      {legendOpen && (
        <div className="legend">
          {legendItems.map(({ group, text }, i) => (
            <LegendItem
              key={group}
              group={group}
              setHighlighted={setHighlighted}
              text={text}
              selectedGroup={selectedGroup}
              position={i + 1}
            />
          ))}
        </div>
      )}
      <button
        className="legend__button"
        onClick={openLegend}
        onKeyDown={handleKeyDown}
      >
        {legendOpen ? "X" : "Legend"}
      </button>
    </React.Fragment>
  );

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const { key } = e;

    if (legendOpen && selectedGroup === 0) {
      if (key === "Escape") {
        setLegendOpen(false);
      }
    }

    if (legendOpen) {
      if (key === "ArrowUp") {
        const newGroup =
          selectedGroup === 0 || selectedGroup === 1
            ? legendItems.length
            : selectedGroup - 1;
        setSelectedGroup(newGroup);
        const selectedGroupObj = legendItems.find((_, i) => i + 1 === newGroup);
        setHighlighted(selectedGroupObj.group);
      } else if (key === "ArrowDown") {
        const newGroup =
          selectedGroup === legendItems.length ? 1 : selectedGroup + 1;
        setSelectedGroup(newGroup);
        const selectedGroupObj = legendItems.find((_, i) => i + 1 === newGroup);
        setHighlighted(selectedGroupObj.group);
      } else if (key === "Escape") {
        setSelectedGroup(0);
        setHighlighted(null);
      }
    }
  }

  function openLegend() {
    setLegendOpen(p => !p);
    setSelectedGroup(0);
  }
};

export default Legend;
