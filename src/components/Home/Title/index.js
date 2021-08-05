import { auth } from 'firebase/config';
import React from 'react';

const Title = ({ displayName, photoURL }) => {
    return (
        <div className="header">
            <div className="header-title">
                <h1>FireGram</h1>
                <div>
                    <div className="user-info">
                        <img src={photoURL} alt={displayName} />
                        <label>{displayName}</label>
                    </div>
                    <div className="actions">
                        <label onClick={() => auth.signOut()}>Logout</label>
                    </div>
                </div>
            </div>
            <h2>Your Pictures</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    );
}

export default Title;