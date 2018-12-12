import React, { Component } from "react";
import Properties from "../components/Properties/properties";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "../components/Home/home";
import Favourites from "../components/favourites/favourites";
import FullProperty from "../components/FullProperty/FullProperty";
import Contact from "../components/Contact/contact";
import { IntlProvider } from "react-intl";
import NavBar from "../components/NavBar/NavBar";
import message from "./message";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props.lang);
    return (
      <IntlProvider locale={this.props.lang} messages={message.lang}>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/properties/:id" component={FullProperty} />
            <Route path="/properties" component={Properties} />
            <Route path="/fav" component={Favourites} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    lang: state
  };
};

export default connect(mapStateToProps)(App);
