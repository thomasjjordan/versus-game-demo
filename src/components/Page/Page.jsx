import React from 'react';
import NavBar from '../NavBar/NavBar'
import './Page.css';

const Page = ({ headerProps, id, children }) => {
	return (
		<div className='page' {...(id ? { id } : {})}>
				<div>
					<NavBar />
				</div>
				<div>
					<div className='content'>
						<section>{children}</section>
					</div>
					<footer/>
				</div>
		</div>
	);
};

export default Page;
