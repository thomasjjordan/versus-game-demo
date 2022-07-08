import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/userSlice';

const ImageCard = ({ id, description, link }) => {

	const currentUser = useSelector(state => state.app.users.find(user => user.id === state.app.currentUserId))
	const { favorites } = currentUser;

	// check if image is already in favorites
	const previouslyFavorited = favorites.includes(id);

	const [favorited, setFavorited] = useState(previouslyFavorited);
	const dispatch = useDispatch();



	const toggleFavorite = () => {
		if (favorited) {
			setFavorited(false);
			dispatch(removeFavorite({ id }));
		} else {
			setFavorited(true);
			dispatch(addFavorite({ id }));
		}
	};

	return (
		<div style={{ padding: '20px' }}>
			<Card raised sx={{ width: 345, height: description ? 345 : 245 }}>
				<CardMedia component='img' height='194' src={link} alt='Paella dish' />
				{description && (
					<CardContent sx={{ height: 50 }}>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				)}
				<CardActions>
					<IconButton onClick={toggleFavorite} aria-label='add to favorites'>
						<FavoriteIcon sx={{ color: favorited ? 'red' : 'grey' }} />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
};

export default ImageCard;
