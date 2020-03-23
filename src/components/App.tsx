import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ElementsList } from "./ElementsList";
import { IElement } from "../utils/types";

import '../styles/main.scss';

const App = props => {
  const data = useStaticQuery(graphql`
    query allElementsQuery {
      dataJson {
        elements {
          symbol
        }
      }
    }
  `);

  const elements: IElement[]  = data.dataJson.elements;

  return (
    <div className="container">
      <ElementsList elements={elements} />
    </div>
  )
}

export default App
