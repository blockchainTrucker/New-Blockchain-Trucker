// import node module libraries
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

// import sub components
import FeaturesList from './FeaturesList';
import HeroContent from './HeroContent';

const About = () => {
	return (
		<Fragment>
			<div className='py-10 bg-white'>
				<Container>
					<HeroContent />
				</Container>
			</div>

			{/* Three Columns Features Section */}
			<FeaturesList />

			{/* Hero Call to Action */}
		</Fragment>
	);
};

export default About;
