import { auth } from 'firebase/config';
import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let history = useHistory();
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, photoURL, uid } = user;
                setUser({ displayName, email, photoURL, uid });

                history.push("/");
                return;
            }
            history.push("/login");
        })

        return () => unsubscribe();
    }, [history]);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;