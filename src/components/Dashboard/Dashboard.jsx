import React from 'react';
import { useSelector } from 'react-redux'
import imageLink from '../../helpers/imageLink'
import Page from '../Page/Page';
import ImageCard from '../ImageCard/ImageCard';


const Dashboard = props => {

 const currentUser = useSelector(state => state.app.users.find(user => user.id === state.app.currentUserId))
 const { favorites } = currentUser;

	return (
		<Page>
			<h3>Favoirted Images:</h3>
			<div>
				{favorites.length > 0 ? (
					<div className='searchResults-container'>
						<div className='searchResults'>
							{favorites.map(image => (
								<ImageCard key={image} id={image} link={imageLink(image)} />
							))}
						</div>
					</div>
				) : (
					<h3>No Images To Display</h3>
				)}
			</div>
		</Page>
	);
};

export default Dashboard;
