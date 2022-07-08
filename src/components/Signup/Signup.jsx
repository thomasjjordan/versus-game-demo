import React, { useContext, useState } from 'react';
import AuthContext from '../../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import Page from '../Page/Page';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Signup.css';

const Signup = () => {
	const useAuth = () => {
		return useContext(AuthContext);
	};

	const { onLogout } = useAuth();
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleNameChange = event => setName(event.target.value);
	const handleUserNameChange = event => setUsername(event.target.value);
	const handleEmailChange = event => setEmail(event.target.value);
	const handlePasswordChange = event => setPassword(event.target.value);

	const handleSubmit = () => {
		dispatch(addUser({ name, username, email, password, favorites: [] }));
		onLogout();
		navigate('/');
	};


	const boxStyle = {
		width: 500,
		maxWidth: '100%',
		padding: '20px',
	};

	return (
		<Page>
			<div className='signup-container'>
				<h1>Signup</h1>
				<div className='textfield-container'>
					<Box sx={boxStyle}>
						<TextField fullWidth id='name' label='Name' variant='outlined' onChange={handleNameChange} />
					</Box>
					<Box sx={boxStyle}>
						<TextField fullWidth id='user-name' label='Username' variant='outlined' onChange={handleUserNameChange} />
					</Box>
					<Box sx={boxStyle}>
						<TextField fullWidth id='email' label='email' variant='outlined' onChange={handleEmailChange} />
					</Box>
					<Box sx={boxStyle}>
						<TextField fullWidth id='password' label='Password' variant='outlined' onChange={handlePasswordChange} />
					</Box>
					<Button fullWidth onClick={() => handleSubmit()} variant='contained'>
						Create Account
					</Button>
				</div>
			</div>
		</Page>
	);
};

export default Signup;
