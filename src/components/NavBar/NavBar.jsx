import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../helpers/AuthContext';
import './NavBar.css';

export const NavBar = () => {
	const navigate = useNavigate();

	const useAuth = () => useContext(AuthContext);
	const { onLogout, token } = useAuth();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<MenuItem onClick={() => navigate('/dashboard')}>
						<Typography textAlign='center'>Dashboard</Typography>
					</MenuItem>
					<MenuItem onClick={() => navigate('/search')}>
						<Typography textAlign='center'>Search</Typography>
					</MenuItem>
					<MenuItem onClick={() => (token ? onLogout() : navigate('/'))}>
						<Typography textAlign='center'>{token ? 'Logout' : 'Login'}</Typography>
					</MenuItem>
					{!token && (
						<MenuItem onClick={() => navigate('/signup')}>
							<Typography textAlign='center'>Signup</Typography>
						</MenuItem>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
