import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Navigation from "./components/Navigation"
import Profile from "./components/Profile/Profile"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Featured from "./components/Featured/Featured";
import SearchResults from "./components/SearchResults/SearchResults";

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
          {/* dont forget to add :id to profile path*/}
          <Profile/>
        </Route>
        <Route path={"/privacypolicy"} exact={true}>
          <PrivacyPolicy/>
        </Route>
        <Route path={["/login"]} exact={true}>
          <Login/>
        </Route>
        <Route path={['/register']} exact={true}>
          <SignUp/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
