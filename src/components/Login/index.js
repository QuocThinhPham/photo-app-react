import { firebase, auth } from 'firebase/config';
import { addDocument } from 'firebase/services';
import React from 'react';

const Login = () => {
    const handleEmailAndPasswordLogin = async () => { }

    const handleGgLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

        if (additionalUserInfo.isNewUser) {
            const { displayName, email, photoURL, uid } = user;
            addDocument('users', {
                displayName,
                email,
                photoURL,
                uid
            })
        }
    }

    return (
        <div className="wrapper">
            <div className="box">
                <h3>Photo Library</h3>
                {/* <button className="btn btn-facebook">Log in with Facebook</button> */}
                <button
                    className="btn btn-email"
                    onClick={handleEmailAndPasswordLogin}
                >Log in with Email</button>
                <button
                    className="btn btn-google"
                    onClick={handleGgLogin}
                >Log in with Google</button>
            </div>
        </div>
    );
}

export default Login;