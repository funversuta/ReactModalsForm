import React from "react";
import "./ChildModal.css";
import Modal from "../Modal/Modal";

export interface ModalProps {
  modal2Active: boolean;
  btn_text: string;
  title: string;
  description: string;
  setModal2Active: (arg0: boolean) => void;
}

const ChildModal: React.FC<ModalProps> = ({
  modal2Active,
  title,
  description,
  setModal2Active,
  btn_text,
}) => {
  return (
    <div className="childModal">
      <div className="button" onClick={() => setModal2Active(true)}>
        {btn_text}
      </div>
      <Modal
        className="modalz"
        active={modal2Active}
        setActive={setModal2Active}
      >
        <div style={{ width: 200 }}>
          <span id="child-modal-title">{title}</span>
          <p id="child-modal-description">{description}</p>
          <button onClick={() => setModal2Active(false)}>Закрыть окно</button>
        </div>
      </Modal>
    </div>
  );
};
export default ChildModal;
