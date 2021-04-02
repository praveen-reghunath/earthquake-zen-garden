import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './layouts/Header';

import Details from './pages/Details';
import Home from './pages/Home';
import Profile from './pages/Profile';

import API from './utils/api';

import { useAppState } from './state/appState';

import './App.scss';

function App() {
  const [state, updateAppState] = useAppState();

  const requestAppInfo = async () => {
    const appInfo = await API.getApplicationInfo();
    updateAppState(prevState => {
      return { ...prevState, ...appInfo };
    });
  };

  const getLatestEarthquakesList = async () => {
    const earthquakes = await API.getLatestEarthquakes();
    updateAppState(prevState => {
      return { ...prevState, earthquakes };
    });
  }

  useEffect(() => {
    requestAppInfo();
    getLatestEarthquakesList();
  }, []);

  console.log(state);

  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;