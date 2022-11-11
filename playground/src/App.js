import React from 'react';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import { AuthContext } from './contexts/authContext';
  
import { Profile, SignIn } from 'auth-component-library';

const App = ()  => {

    const mockAPI = 'http://localhost:3000'

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={
                    <SignIn 
                        authContext={ AuthContext } 
                        authUrl={ `${mockAPI}/auth` } 
                    />} 
                />
                <Route path="/profile" element={
                    <Profile
                        profileURL={ `${mockAPI}/profile` } 
                    />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
