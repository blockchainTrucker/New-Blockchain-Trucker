// Section : Features
// Style : Three Columns Features Section

// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import MDI icons
import { mdiFileClock, mdiAccountGroup, mdiShieldLock } from '@mdi/js';

// import custom components
import FeatureTopIconCard from 'components/main/FeatureTopIconCard';

// import sub components
import SectionHeading from './SectionHeading';

const Features3Columns = () => {
	const title = 'Our core values';
	const description = `Our core values are the fundamental beliefs of a person or organization geeks academy. We help
    people understand the difference between right and wrong.`;

	const features = [
		{
			id: 1,
			icon: mdiShieldLock,
			title: 'Security Practices',
			description: `User privacy and data security are the pillars of everything we do. We will never sell or exchange user data.`,
		},
		{
			id: 2,
			icon: mdiFileClock,
			title: 'Trustless Applications',
			description: `By leveraging the power of smart contracts, we create applications that automatically execute when all conditions are met.`,
		},
		{
			id: 3,
			icon: mdiAccountGroup,
			title: 'Eqitable Internet',
			description: `Create platforms that people of all socioeconomic backgrounds can utilize and benefit from.`,
		},
	];

	return (
		<div className='py-lg-16 py-10'>
			<Container>
				<SectionHeading title={title} />
				<Row>
					{features.map((item, index) => {
						return (
							<Col md={4} sm={12} key={index}>
								<FeatureTopIconCard item={item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
};

export default Features3Columns;
