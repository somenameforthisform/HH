import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./pages/Home/Home.js";
import { Login } from "./pages/Login/Login.js";
import { News } from "./pages/News/News.js";
import { Profile } from "./pages/Profile/Profile.js";

function App() {
  //Стейт проверяющий был ли вход
  const [loginState, setLoginState] = useState(false);
  //Стейт получающий с сервера данные пользователя, которые отображются в /profile
  const [confidentialData, setConfidentialData] = useState("");

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route
          path={"/login"}
          render={(props) => (
            <Login
              loginState={loginState}
              setLoginState={setLoginState}
              setConfidentialData={setConfidentialData}
              confidentialData={confidentialData}
            />
          )}
        />
        <Route path={"/news"} component={News} />
        <Route
          path={"/profile"}
          render={(props) => (
            <Profile login={loginState} confidentialData={confidentialData} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
