import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Navigation from "./components/Navigation"
import Profile from "./components/Profile/Profile"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Featured from "./components/Featured/Featured";
import SearchResults from "./components/SearchResults/SearchResults";

import Logout from "./components/Login/Logout";

import Details from "./components/Details/Details";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path={["/"]} exact={false}>
          <Navigation />
        </Route>
        <Route path={["/", "/home"]} exact={true}>
          <Home />
        </Route>
        <Route path={["/featured"]} exact={true}>
          <Featured/>
        </Route>
        <Route path={["/search/:searchTerm"]} exact={true}>
          <SearchResults />
        </Route>
        <Route path={["/profile/:id"]} exact={false}>
          <Profile/>
        </Route>
        <Route path={"/privacypolicy"} exact={true}>
          <PrivacyPolicy/>
        </Route>
        <Route path={["/login"]} exact={true}>
          <Login/>
        </Route>
        <Route path={["/logout/:id"]} exact={true}>
          <Logout/>
        </Route>
        <Route path={['/register']} exact={true}>
          <SignUp/>
        </Route>

        <Route path={['/details/:id']} exact={true}>
          <Details/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
