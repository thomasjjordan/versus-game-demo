import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';
import Page from '../Page/Page';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const useAuth = () => {
		return useContext(AuthContext);
	};

	const { onLogin, token } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate('/search');
		}
	}, [token, navigate]);

	return (
		<Page>
			<div className='login-container'>
				<h1>Login</h1>
				<div className='textfield-container'>
					<div className='input'>
						<Box
							sx={{
								width: 500,
								maxWidth: '100%',
							}}
						>
							<TextField
								fullWidth
								onChange={e => setUsername(e.target.value)}
								id='username'
								label='Username'
								variant='outlined'
							/>
						</Box>
					</div>
					<div className='input'>
						<Box
							sx={{
								width: 500,
								maxWidth: '100%',
							}}
						>
							<TextField
								fullWidth
								onChange={e => setPassword(e.target.value)}
								id='password'
								label='Password'
								variant='outlined'
							/>
						</Box>
					</div>
					<Button fullWidth onClick={() => onLogin(username, password)} variant='contained'>
						Login
					</Button>
				</div>
			</div>
		</Page>
	);
};

export default Login;
