import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "./pages/home";
import Print from "./pages/print";
import Booking from   "./pages/booking";
import Checkin from "./pages/checkin";
// const Home = lazy(() => import("./pages/home"));
// const OtherService = lazy(() => import("./pages/services"));

class App extends React.Component {

render(){
  return(
<React.Fragment>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/booking" component={Booking}/>
          <Route path="/checkin" component={Checkin}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

}


export default App;

