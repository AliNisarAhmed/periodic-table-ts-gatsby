import React from "react"
import { IElement } from "../utils/types"

interface IProps {
  elements: IElement[]
  children?: any
}

export const ElementsList: React.FC<IProps> = ({ elements }) => {
  return (
    <div>
      {elements.map(elem => (
        <div key={elem.name}>{elem.symbol}</div>
      ))}
    </div>
  )
}
