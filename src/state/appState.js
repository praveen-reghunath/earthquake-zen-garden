import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext(null);

const initialState = {
    siteInfo: {},
    userName: '',
    profile: undefined,
    earthquakes: undefined,
    earthquakeDetails: undefined
};

const useAppContext = () => useState(initialState);

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