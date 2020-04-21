import React from "react";
import LegendItem from "./LegendItem";

interface IProps {
  setHighlighted: any;
}

const Legend = ({ setHighlighted }) => {
  return (
    <div className="legend">
      <LegendItem group="metal" text="Metal" setHighlighted={setHighlighted} />
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
  );
};

export default Legend;
