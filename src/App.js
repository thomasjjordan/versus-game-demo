import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from "./helpers/AuthProvider";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Search from './components/Search/Search';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
      <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact element={<Login/>} path="/" />
              <Route exact element={<Signup/>} path="signup" />
              <Route
                path="search"
                element={
                  <PrivateRoute>
                    <Search />
                  </PrivateRoute>
                }
            />
              <Route
                path="dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
            />
            </Routes>
          </AuthProvider>
        </Router>
      </div>

  );
}

export default App;
