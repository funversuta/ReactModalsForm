import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Modal from "./Modal/Modal";
import svg from "./icons/letter.svg";
import "./App.css";
import ChildModal from "./ChildModal/ChildModal";

function App() {
  const [modalActive, setModalActive] = useState(true);
  const [modal2Active, setModal2Active] = useState(false);
  const [modal3Active, setModal3Active] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailErr, setEmailErr] = useState("Не может быть пустым");
  const [passwordErr, setPasswortErr] = useState("Не может быть пустым");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e: { target: { name: string } }) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);

    const re = //eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErr("Некорректный емейл");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswortErr("Пароль дрлжен быть длинее 3 и меньше 8");
      if (!e.target.value) {
        setPasswortErr("Не может быть пустым");
      }
    } else {
      setPasswortErr("");
    }
  };

  useEffect(() => {
    if (emailErr || passwordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailErr, passwordErr]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Register form with modals</p>
        <button className="App-button" onClick={() => setModalActive(true)}>
          Learn React
        </button>
      </header>
      <Modal className="modal" active={modalActive} setActive={setModalActive}>
        <form>
          <h1>
            <b>Web</b> App
            <div className="close" onClick={() => setModalActive(false)}></div>
          </h1>
          <h2>Войдите в свой профиль</h2>
          <span style={{ color: "gray" }}>Логин</span>
          <input
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => emailHandler(e)}
          />
          {emailDirty && emailErr && (
            <div style={{ color: "red" }}>{emailErr}</div>
          )}
          <span style={{ color: "gray" }}>Пароль</span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onBlur={(e) => blurHandler(e)}
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
          {passwordDirty && passwordErr && (
            <div style={{ color: "red" }}>{passwordErr}</div>
          )}
          <button disabled={!formValid} type="submit">
            войти
          </button>
        </form>
        <ChildModal
          modal2Active={modal2Active}
          title={"Text in a child modal"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
          btn_text={"Я забыл пароль"}
          setModal2Active={setModal2Active}
        />
        <ChildModal
          modal2Active={modal3Active}
          title={"Text in a child modal2"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
          btn_text={"Регистрация"}
          setModal2Active={setModal3Active}
        />
        <footer>
          <a className="linkHelp" href="mailto:help@email.ru">
            <img className="letter" src={svg} width={15} height={15} alt="" />
            Написать в поддержку
          </a>
        </footer>
      </Modal>
    </div>
  );
}

export default App;
