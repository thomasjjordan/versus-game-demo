import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { retrieveUserData } from './userDataUtils';
import { updateCurrentUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import AuthContext from './AuthContext';

// fakeAuth is a function that returns a promise that resolves after 1 second
const fakeAuth = () =>
	new Promise(resolve => {
		setTimeout(() => resolve('2342f2f1d131rf12'), 250);
	});

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// make sure username and password fields are not empty
	// make sure username exists in the records
	// make sure password matches the password in the records
	const validateLogin = (username, password) => {
		if (!username || !password) {
			return false;
		} else {
			const users = retrieveUserData();
			const user = users.find(user => user.username === username);
			const userIsValid = user && user.password === password;
			return { userIsValid, user };
		}
	};

	const handleLogin = async (username, password) => {
		const token = await fakeAuth();
		const { userIsValid, user } = validateLogin(username, password);

		// if user is valid, set the token and update the current user
		if (userIsValid) {
			setToken(token);
			dispatch(updateCurrentUser(user));
			navigate('/search');
		} else {
			alert('Invalid login');
		}
	};

	const handleLogout = () => {
		setToken(null);
	};

	const value = {
		token,
		onLogin: handleLogin,
		onLogout: handleLogout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
