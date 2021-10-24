import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import Home from "./components/home/home";

function App({ youtube }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home youtube={youtube} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
