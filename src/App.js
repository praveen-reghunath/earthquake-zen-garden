import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from 'layouts/Header';

import Details from 'pages/Details';
import Home from 'pages/Home';
import Profile from 'pages/Profile';

import API from 'utils/api';

import { useAppState } from 'state/appState';

import './App.scss';

function App() {
  const { setSiteInfo, setUserName, setEarthquakes } = useAppState();

  const requestAppInfo = async () => {
    const appInfo = await API.getApplicationInfo();
    setSiteInfo(appInfo.siteInfo);
    setUserName(appInfo.userName);
  };

  const getLatestEarthquakesList = async () => {
    const earthquakes = await API.getLatestEarthquakes();
    setEarthquakes(earthquakes);
  }

  useEffect(() => {
    requestAppInfo();
    getLatestEarthquakesList();
  }, []);

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