import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useStorage from '../../../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { progress, url } = useStorage(file, user.uid);


    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    );
}

export default ProgressBar;