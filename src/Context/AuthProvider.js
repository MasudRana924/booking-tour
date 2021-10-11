import React, { createContext } from 'react';
import useFirebase from './../Components/Hooks/useFirebase';
export const authContext = createContext()
const AuthProvider = (props) => {
    const { children } = props
    const allText=useFirebase()
    return (
        <authContext.Provider value={allText}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;