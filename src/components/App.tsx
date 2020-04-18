import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { PeriodicTable } from "./PeriodicTable";
import { IElement } from "../utils/types";
import Legend from "./Legend";
import Search from "./Search";
import { func } from "prop-types";

const App = props => {
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  console.log("elements: ", elements);

  return (
    <div className="app">
      <PeriodicTable elements={elements} searchTerm={searchTerm} />
      <Legend />
      <Search searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />
    </div>
  );

  function onSearchTermChange(value: string) {
    setSearchTerm(value);
  }
};

export default App;
