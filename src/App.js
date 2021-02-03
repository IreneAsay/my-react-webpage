import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Portfolio from "./container/Portfolio/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Project from "./components/Project";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: "url(./images/website_background.jpeg)" }}
    >
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Redirect to="/about" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;