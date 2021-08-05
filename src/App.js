import Home from 'components/Home';
import Login from 'components/Login';
import AuthProvider from 'context/AuthProvider';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;