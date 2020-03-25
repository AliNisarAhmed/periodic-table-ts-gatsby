import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ElementsList } from "./ElementsList";
import { IElement } from "../utils/types";

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

  return <ElementsList elements={elements} />;
};

export default App;
