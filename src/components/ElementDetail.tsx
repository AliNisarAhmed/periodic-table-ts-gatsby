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
  if (element === null) {
    return null;
  }

  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={`modal modal--${element.group}`}
        overlayClassName="modal__overlay"
        shouldFocusAfterRender={true}
      >
        <div className="modal__container">
          <div className="modal__button--container">
            <button onClick={closeModal} className="modal__button"></button>
          </div>
          <div className="modal__symbol center">
            <h1>{element.symbol}</h1>
          </div>
          <div className="modal__facts">
            <p>
              <span className="modal__fieldName">Name:</span> {element.name}
            </p>
            <p>
              <span className="modal__fieldName">Atomic Number:</span>{" "}
              {element.number}
            </p>
            <p>
              <span className="modal__fieldName">Atomic mass:</span>{" "}
              {element.atomic_mass}
            </p>
            <p>
              <span className="modal__fieldName">Discovered By:</span>{" "}
              {element.discovered_by}
            </p>
            <p>
              <span className="modal__fieldName">Period:</span> {element.period}
            </p>
            <p>
              <span className="modal__fieldName">Group:</span>{" "}
              <span className="modal__fieldName--group">
                {element.category}
              </span>
            </p>
            <p>
              <span className="modal__fieldName">Phase:</span> {element.phase}
            </p>
            <p>
              <span className="modal__fieldName">Melting Point:</span>{" "}
              {element.melt} K
            </p>
            <p>
              <span className="modal__fieldName">Boiling Point:</span>{" "}
              {element.boil} K
            </p>
            <p>
              <span className="modal__fieldName">Color:</span> {element.color}
            </p>
            <p>
              <span className="modal__fieldName">Molar Heat:</span>{" "}
              {element.molar_heat}
            </p>
            <p>
              <span className="modal__fieldName">Density:</span>{" "}
              {element.density}
            </p>
            <p>
              <span className="modal__fieldName modal__fieldName--summary">
                Summary:
              </span>
              <br />
              {element.summary}
            </p>
            <a className="modal__link" href={element.source} target="_blank">
              Read more on Wikipedia
            </a>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ElementDetail;