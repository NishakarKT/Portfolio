import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// costants
import * as ROUTES from "./constants/routes";
// components
import Loading from "./components/loading/Loading";
import NavBar from "./components/navBar/NavBar";
// pages
const GetStarted = lazy(() => import("./pages/getStarted/GetStarted"));
const Home = lazy(() => import("./pages/home/main/Home"));
const Hobbies = lazy(() => import("./pages/hobbies/main/Hobbies"));
const Achievements = lazy(() => import("./pages/achievements/main/Achievements"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const NotFound = lazy(() => import("./pages/404/NotFound"));

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="app__body">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path={ROUTES.GET_STARTED} component={GetStarted} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.HOBBIES} component={Hobbies} />
              <Route exact path={ROUTES.ACHIEVEMENTS} component={Achievements} />
              <Route exact path={ROUTES.CONTACT} component={Contact} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
