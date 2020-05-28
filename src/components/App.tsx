import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { PeriodicTable } from "./PeriodicTable";
import { IElement } from "../utils/types";
import Legend from "./Legend";
import Search from "./Search";
import PeriodNumbers from "./PeriodNumbers";

const App = props => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const data = useStaticQuery(graphql`
    query allElementsQuery {
      dataJson {
        elements {
          name
          group
          appearance
          atomic_mass
          boil
          category
          color
          density
          discovered_by
          melt
          molar_heat
          named_by
          number
          period
          phase
          source
          spectral_img
          summary
          symbol
          xpos
          ypos
          shells
          electron_configuration
          electron_affinity
          electronegativity_pauling
          ionization_energies
          number
          molar_heat
        }
      }
    }
  `);

  const elements: IElement[] = data.dataJson.elements;

  return (
    <React.Fragment>
      <div className="app">
        <PeriodNumbers />
        <PeriodicTable
          elements={elements}
          searchTerm={searchTerm}
          highlighted={highlighted}
        />
        <Legend setHighlighted={setHighlighted} />
      </div>
      <Search searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />
    </React.Fragment>
  );

  function onSearchTermChange(value: string) {
    setSearchTerm(value);
  }
};

export default App;
