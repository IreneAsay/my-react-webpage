import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./container/About";
import Contact from "./container/Contact"
import Portfolio from "./container/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={NoMatch} />
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
