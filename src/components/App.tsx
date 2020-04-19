import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { PeriodicTable } from "./PeriodicTable";
import { IElement } from "../utils/types";
import Legend from "./Legend";
import Search from "./Search";

const App = props => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const data = useStaticQuery(graphql`
    query allElementsQuery {
      dataJson {
        elements {
          symbol
          number
          atomic_mass
          name
          group
          category
        }
      }
    }
  `);

  const elements: IElement[] = data.dataJson.elements;

  return (
    <div className="app">
      <PeriodicTable
        elements={elements}
        searchTerm={searchTerm}
        highlighted={highlighted}
      />
      <Legend setHighlighted={setHighlighted} />
      <Search searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />
    </div>
  );

  function onSearchTermChange(value: string) {
    setSearchTerm(value);
  }
};

export default App;
