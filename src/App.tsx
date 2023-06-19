import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Modal from "./Modal/Modal";
import "./App.css";
import Form from "./Form/Form";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Register form with modals</p>
        <button className="App-button" onClick={() => setModalActive(true)}>
          Модальное окно
        </button>
      </header>
      <Modal className="modal" active={modalActive} setActive={setModalActive}>
        <Form modalActive={modalActive} setModalActive={setModalActive} />
      </Modal>
    </div>
  );
}

export default App;
