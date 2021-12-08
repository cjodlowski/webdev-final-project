import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Navigation from "./components/Navigation"
import Profile from "./components/Profile/Profile"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";


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
        <Route path={["/profile"]} exact={false}>
          <Profile/>
        </Route>
        <Route path={"/privacypolicy"} exact={true}>
          <PrivacyPolicy/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
