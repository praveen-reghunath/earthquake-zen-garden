import React, { createContext, useState, useContext, useReducer } from 'react';
import { earthquakesReducer } from './earthquakesReducer';

const AppContext = createContext(null);

const useAppContext = () => {
    const [siteInfo, setSiteInfo] = useState();
    const [userName, setUserName] = useState('');
    const [profile, setProfile] = useState();
    const [earthquakes, dispatch] = useReducer(earthquakesReducer, {});

    const sortEarthquakes = (column) => {
        dispatch({ type: `SORT_BY_${column}` });
    };

    const setEarthquakes = (data) => {
        dispatch({ type: `INIT`, payload: data });
    };

    return {
        siteInfo,
        setSiteInfo,
        userName,
        setUserName,
        profile,
        setProfile,
        earthquakes,
        setEarthquakes,
        sortEarthquakes
    };
};

export const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={useAppContext()}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppState = () => {
    const value = useContext(AppContext);
    if (value === null) throw new Error('Make sure you are using the hook from a component placed under the AppContextProvider');
    return value;
};