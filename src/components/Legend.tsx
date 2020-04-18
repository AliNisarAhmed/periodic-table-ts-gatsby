import React from "react";

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend__item">
        <div className="legend__color legend__color--metal"></div>
        <div className="legend__text">Metals</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--nonmetal"></div>
        <div className="legend__text">Non Metals</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--halogen"></div>
        <div className="legend__text">Halogens</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--nobelGas"></div>
        <div className="legend__text">Nobel Gasses</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--alkaliMetal"></div>
        <div className="legend__text">Alkali Metals</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--transitionMetal"></div>
        <div className="legend__text">Transition Metals</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--alkalineEarthMetal"></div>
        <div className="legend__text">Alkaline Earth Metals</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--metalloid"></div>
        <div className="legend__text">Metalloids</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--lanthanoid"></div>
        <div className="legend__text">Lanthanides</div>
      </div>
      <div className="legend__item">
        <div className="legend__color legend__color--actinoid"></div>
        <div className="legend__text">Actinides</div>
      </div>
    </div>
  );
};

export default Legend;
