// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Image, Container } from 'react-bootstrap';

// import MDI icons

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
								Fill in the form and I will get in touch with
								you as soon as possible. Or feel free to send me
								a call, text, or email.
							</p>
							<div className='mt-8'>
								<p className='fs-4'>
									<Telephone size={16} className='me-2' />{' '}
									<a href='tel:+18042344741'>
										+1 804-234-4741{' '}
									</a>
								</p>

								<p className='fs-4'>
									<EnvelopeOpen size={16} className='me-2' />{' '}
									<a href='mailto:inquiries@decentralized-ventures.com'>
										jwachtel@decentralized-ventures.com
									</a>
								</p>

								<p className='fs-4 '>
									<GeoAlt size={17} className='me-2' />{' '}
									<a
										href='https://www.google.com/maps/place/Powhatan,+VA+23139/@37.5418249,-80.1472609,7z/data=!4m5!3m4!1s0x89b162a37cb4d533:0xc4520886a0a6bcad!8m2!3d37.5415273!4d-77.9188239'
										target='_blank'>
										Based out of Powhatan, VA
									</a>
								</p>
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
