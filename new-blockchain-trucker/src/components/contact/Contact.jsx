// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Image, Container } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiGithub } from '@mdi/js';

// import BS icons
import { Telephone, EnvelopeOpen, GeoAlt } from 'react-bootstrap-icons';

// import sub components
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<Container fluid className='bg-white'>
			<Row className='align-items-center lg-min-vh-100'>
				<Col lg={6} md={12} sm={12}>
					<div className='px-xl-20 px-md-8 px-4 py-8 py-lg-0 pb-lg-20'>
						<div>
							<h1 className='display-5 fw-bold text-primary'>
								Get In Touch
							</h1>
							<p className='lead justify text-dark'>
								Fill in the form to get in touch with someone on
								our team, and we will reach out shortly.
							</p>
							<div className='mt-8'>
								<a href='tel:+18042344741'>
									<p className='fs-4'>
										<Telephone
											size={16}
											className='text-primary me-2'
										/>{' '}
										+1 804-234-4741
									</p>
								</a>
								<a href='mailto:inquiries@decentralized-ventures.com'>
									<p className='fs-4'>
										<EnvelopeOpen
											size={16}
											className='text-primary me-2'
										/>{' '}
										inquiries@decentralized-ventures.com
									</p>
								</a>

								{/* <p className='fs-4 '>
									<GeoAlt
										size={17}
										className='text-primary me-2'
									/>{' '}
									Based out of Powhatan, VA
								</p> */}
							</div>
						</div>
					</div>
				</Col>

				{/* right side form section with background color */}
				<Col
					lg={6}
					className='d-lg-flex align-items-center w-lg-50 min-vh-lg-125 position-fixed-lg bg-cover bg-light top-0 right-0'>
					<ContactForm />
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
