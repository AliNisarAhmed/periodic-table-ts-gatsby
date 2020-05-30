import React, { useState } from "react";
import LegendItem from "./LegendItem";

interface IProps {
  setHighlighted: any;
}

const Legend = ({ setHighlighted }) => {
  const [legendOpen, setLegendOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      {legendOpen && (
        <div className="legend">
          <LegendItem
            group="metal"
            text="Metal"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="nonmetal"
            text="Non Metal"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="halogen"
            text="Halogens"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="noble_gas"
            text="Nobel Gasses"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="alkali_metal"
            text="Alkali Metal"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="transition_metal"
            text="Transition Metal"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="alkaline_earth_metal"
            text="Alkaline Earth Metal"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="metalloid"
            text="Metalloids"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="lanthanoid"
            text="Lanthanides"
            setHighlighted={setHighlighted}
          />
          <LegendItem
            group="actinoid"
            text="Actinides"
            setHighlighted={setHighlighted}
          />
        </div>
      )}
      <button className="legend__button" onClick={() => setLegendOpen(p => !p)}>
        {legendOpen ? "X" : "Legend"}
      </button>
    </React.Fragment>
  );
};

export default Legend;
