import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import 'assets/scss/style.scss'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
        <Route path="/" component={LandingPage} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;