import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Alert } from "./components/Alert.js";

export const Login = (props) => {

  //Стейты инпутов
  const [passwordValue, setPasswordValue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const [alertState, setAlertState] = useState("");

   //функция проверяющая введённые данные
  const authentication = (data) => {
    const authData = ["admin", "admin"];
    if ((data[0] === authData[0]) & (data[1] === authData[1])) {
      return true;
    } else {
      return false;
    }
  };


//Получаем данные пользователя, которые потом пойдут в /profile
  const getLogin = () => {fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => props.setConfidentialData(json),
        props.setLoginState(true))
      .catch(() => setAlertState('ошибка запроса к серверу'));
}


  const submitHandler = (event) => {
    event.preventDefault();
    if (authentication([userNameValue, passwordValue])) {
      return getLogin();
    } else {
      return setAlertState('неправильный логин или пароль');
    }
  };

  if (props.loginState === true) {
    return <Redirect to="profile" />;
  } else {
    return (
      <div className="wrap">
        <div className="loginWrap">
          {alertState && <Alert alertState={alertState} />}
          <div className="loginWindow">
            <form className="loginForm" onSubmit={submitHandler}>
              <label>
                Логин:
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={userNameValue}
                  onChange={(e) => setUserNameValue(e.target.value)}
                />
              </label>
              <label>
                Пароль:
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </label>

              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </div>
    );
  }
};
