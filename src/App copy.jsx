import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Router from './config/route'
// import Home from './components/Home/Home';
// import Insurance from './components/Insurance/Insurance';
// import MotorInsurance from './components/Insurance/MotorInsurance/MotorInsurance';
// import CustomNavbar from './components/CustomNavbar';
// import SideNav from './components/SideNav/SideNav'
// import NoMatch from './components/NoMatch';
// import MoneyMatters from './components/MoneyMatters/MoneyMatters';
// import OnTheGo from './components/OnTheGo/OnTheGo';
// import Bus from './components/OnTheGo/Bus/Bus';
// import Ferries from './components/OnTheGo/Ferries/Ferries';
// import Train from './components/OnTheGo/Train/Train';
// import FlightSearch from './components/FlightSearch/FlightSearch';
// import FlightSearch2 from './components/FlightSearch/FlightSearch2';
// import Utilities from './components/Utilities/Utilities';
// import UtilitiesThumbnailSection from './components/UtilitiesThumbnailSection/UtilitiesThumbnailSection';
// import Airtime from './components/Utilities/Airtime/Airtime';
// import Data from './components/Utilities/Data/Data';
// import CableTv from './components/Utilities/CableTv/CableTv';
// import Electricity from './components/Utilities/Electricity/Electricity';
// import Internet from './components/Utilities/Internet/Internet';
// import AskDoc from './components/AskDoc/AskDoc';

// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp/SignUp';
// import ForgotPassword from './components/ForgotPassword/ForgotPassword';
// import { NavbarBrand } from 'react-bootstrap';

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <Router>
            <div>
                {/* {1 === 2 && <CustomNavbar />} */}
                {/* <CustomNavbar /> */}
                
                {/* <CustomNavbar />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route exact path="/" component={Home} />
                <Route exact path="/moneymatters" component={MoneyMatters} />
                <Route
                    exact
                    path="/moneymatters/insurance"
                    component={Insurance}
                />
                <Route
                    exact
                    path="/moneymatters/insurance/motorinsurance"
                    component={MotorInsurance}
                />
                <Route exact path="/onthego" component={OnTheGo} />
                <Route exact path="/onthego/bus" component={Bus} />
                <Route exact path="/onthego/ferries" component={Ferries} />
                <Route exact path="/onthego/train" component={Train} />
                <Route
                    exact
                    path="/onthego/flightsearch"
                    component={FlightSearch}
                />
                <Route
                    exact
                    path="/onthego/flightsearch2"
                    component={FlightSearch2}
                />
                <Route exact path="/utilities" component={Utilities} />
                <Route exact path="/utilities/airtime" component={Airtime} />
                <Route exact path="/utilities/data" component={Data} />
                <Route exact path="/utilities/cabletv" component={CableTv} />
                <Route
                    exact
                    path="/utilities/electricity"
                    component={Electricity}
                />
                <Route exact path="/utilities/internet" component={Internet} />
                <Route exact path="/askdoc" component={AskDoc} />
                <Route path="/nomatch" component={NoMatch} /> */}
            </div>
        </Router>
    );
}

export default App;
