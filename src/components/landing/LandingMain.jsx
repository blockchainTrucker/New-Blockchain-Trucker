// import node module libraries
import { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image, ListGroup } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import FrameworkLogos from 'components/landing/FrameworkLogos';

import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

import LogoList1 from 'routes/frameworkLogos/logoList';

const MainLanding = () => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Home';
	}, []);

	return (
		<Fragment>
			<div className='bg-white'>
				<Container>
					<Row className='align-items-center '>
						<Col
							xl={{ span: 7, offset: 2 }}
							lg={{ span: 8, offset: 1 }}
							md={{ span: 11, offset: 1 }}
							sm={{ span: 12 }}
							xs={{ span: 12 }}
							className='mt-lg-10 mt-6 order-md-1 mb-10'>
							{/* Heading */}
							<h1 className='display-2 ms-1 mb-5 fw-bold'>
								<span className='text-primary'>Full Stack</span>{' '}
								web apps with a hint of{' '}
								<span className='text-primary'>Web 3.0</span>
							</h1>

							{/* list */}
							<ListGroup
								bsPrefix='list-unstyled'
								className='fs-3 text-dark mb-6 fw-medium'>
								<ListGroup.Item
									bsPrefix='mb-1'
									className='d-flex mb-2'>
									<Icon
										path={mdiCheckCircle}
										size={0.9}
										className='text-primary mt-1 me-2'
									/>{' '}
									Equal focus on the frontend and backend
									design
								</ListGroup.Item>
								<ListGroup.Item
									bsPrefix='mb-1'
									className='d-flex mb-2'>
									<Icon
										path={mdiCheckCircle}
										size={0.9}
										className='text-primary mt-1 me-2'
									/>{' '}
									Applications designed to interact with
									blockchains
								</ListGroup.Item>
								<ListGroup.Item
									bsPrefix='mb-1'
									className='d-flex'>
									<Icon
										path={mdiCheckCircle}
										size={0.9}
										className='text-primary mt-1 me-2'
									/>{' '}
									Focused on bringing decentralization to
									market
								</ListGroup.Item>
							</ListGroup>

							{/* Buttons */}
							<div className='mb-8 mb-lg-0'>
								<Link
									to='/portfolio'
									className='btn btn-primary me-3 mb-3 mb-lg-0'>
									See My Portfolio
								</Link>
								<Link
									to='/contact-me'
									className='text-nowrap btn-link'>
									Want to chat? Click here
								</Link>
							</div>
						</Col>
					</Row>

					{/* Trusted By logo */}
					<FrameworkLogos
						title='BELOW ARE THE ENVIRONMENTS AND FRAMEWORKS I AM MOST COMFORTABLE WITH'
						logos={LogoList1}
						limit={6}
					/>
					<Row className='justify-content-center mt-5'>
						<Col
							xl={9}
							lg={9}
							md={12}
							sm={12}
							className='mb-2 mt-10'>
							<div className='text-center mb-8 mt-6'>
								<Link to='/about-me'>
									<span className='ls-md fs-5 text-primary fw-bold'>
										FROM TRACTOR TRAILER DRIVER TO WEB
										DEVELOPER, CLICK HERE TO READ ABOUT MY
										JOURNEY
									</span>
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Fragment>
	);
};

export default MainLanding;
