import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { PeriodicTable } from "./PeriodicTable";
import { IElement } from "../utils/types";
import Legend from "./Legend";

const App = props => {
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
      <PeriodicTable elements={elements} />
      <Legend />
    </div>
  );
};

export default App;
