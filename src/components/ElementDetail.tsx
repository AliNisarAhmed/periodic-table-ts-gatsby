import React from "react";
import ReactModal from "react-modal";
import { IElement } from "../utils/types";

interface IProps {
  isModalOpen: boolean;
  closeModal: any;
  element: IElement;
}

const ElementDetail: React.FC<IProps> = ({
  isModalOpen,
  closeModal,
  element,
}) => {
  console.log("element: ", element);

  if (element === null) {
    return null;
  }

  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal__overlay"
        shouldFocusAfterRender={true}
      >
        <div className="modal__container">
          <div className="modal__symbol center">
            <h1>{element.symbol}</h1>
          </div>
          <div className="modal__facts">
            <p>Name: {element.name}</p>
            <p>Atomic Number: {element.number}</p>
            <p>Atomic mass: {element.atomic_mass}</p>
            <p>Discovered By: {element.discovered_by}</p>
            <p>Period: {element.period}</p>
            <p>Group: {element.category}</p>
            <p>Phase: {element.phase}</p>
            <p>Melting Point: {element.melt}</p>
            <p>Boiling Point: {element.boil}</p>
            <p>Color: {element.color}</p>
            <p>Molar Heat: {element.molar_heat}</p>
            <p>Density: {element.density}</p>
            <p>Wikipedia link: {element.source}</p>
            <p>Summary: {element.summary}</p>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ElementDetail;
