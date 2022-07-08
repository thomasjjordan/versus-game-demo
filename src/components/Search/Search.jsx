import React, { useState } from 'react';
import unsplash from '../../helpers/api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ImageCard from '../ImageCard/ImageCard';
import Page from '../Page/Page';
// import { genres, searchPlaceholder } from "./constants";
// import { MovieCard } from "./MovieCard";
import './Search.css';

const Search = props => {
	const [searchQuery, setSearchQuery] = useState('');
	const [images, setImages] = useState('');

	const searchPhotos = () => {
		unsplash.search
			.getPhotos({ query: searchQuery })
			.then(response => {
				const { results } = response.response;
				setImages(results);
			})
			.catch(() => {
				console.log('something went wrong!');
			});
	};

	return (
		<Page>
			<h3>Search Results:</h3>
			<div className='inputContainer'>
				<div className='inputs'>
					<Box
						sx={{
							width: 500,
							maxWidth: '100%',
						}}
					>
						<TextField
							sx={{
								pt: '10px',
								pb: '10px',
							}}
							fullWidth
							onChange={e => setSearchQuery(e.target.value)}
							id='search'
							label='Search'
							variant='outlined'
						/>
						<Button fullWidth onClick={() => searchPhotos()} variant='contained'>
							Search
						</Button>
					</Box>
				</div>
			</div>
			<div>
				{images.length > 0 ? (
					<div className='searchResults-container'>
						<div className='searchResults'>
							{images.map(image => (
								<ImageCard key={image.id} id={image.id} description={image.alt_description} link={image.urls.thumb} />
							))}
						</div>
					</div>
				) : (
					<h3>No Results</h3>
				)}
			</div>
		</Page>
	);
};

export default Search;
