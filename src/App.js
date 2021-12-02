import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Navigation from "./components/Navigation"
import Profile from "./components/Profile/Profile"
import BookmarkList from "./components/Profile/BookmarkList";
import FollowingList from "./components/Profile/FollowingList";
import ReviewList from "./components/Profile/ReviewList";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import PrivacyPolicyLink from "./components/PrivacyPolicy/PrivacyPolicyLink";


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
        <Route path={["/profile/bookmarks"]} exact={true}>
          <BookmarkList/>
        </Route>
        <Route path={["/profile/following"]} exact={true}>
          <FollowingList/>
        </Route>
        <Route path={["/profile/reviews"]} exact={true}>
          <ReviewList/>
        </Route>
        <Route path={"/privacypolicy"} exact={true}>
          <PrivacyPolicy/>
        </Route>
        <Route path={"/"}>
          <PrivacyPolicyLink/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
