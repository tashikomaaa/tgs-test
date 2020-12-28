import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { history } from './features/Helpers/history'
import { connect } from 'react-redux';
import {alertActions} from './features/Alert/alert.action'
import './App.css';
import {Home} from './Container/Home/';
import {Login} from './Container/Login';
import {Register} from './Container/Register'
import AppBar from './Components/AppBar'

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render () {

    return (

                        <BrowserRouter >
                            <AppBar />
                            <Switch>
                                <Route exact path="/" ><Home /></Route>
                                <Route path="/login"><Login /></Route>
                                <Route path="/register" ><Register /></Route>
                            </Switch>
                        </BrowserRouter>
    )
  }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };