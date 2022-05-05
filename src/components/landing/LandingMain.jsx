// import node module libraries
import { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image, ListGroup } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import FrameworkLogos from 'components/landing/FrameworkLogos';

import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

import LogoList1 from 'data/clientlogos/LogoList2';

const MainLanding = () => {
	const isLaptop = useMediaQuery({ maxWidth: 1024 });

	useEffect(() => {
		document.title = 'Blockchain Trucker - Home';
	}, []);

	return (
		<Fragment>
			<div className='position-relative bg-white'>
				{/* Image */}
				<Container>
					<Row className='align-items-center '>
						<Col
							lg={{ span: 7, offset: 2 }}
							xs={10}
							className='mt-10 order-md-1 mb-10'>
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
									className='d-flex'>
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
									className='d-flex'>
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
									See Portfolio
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
						title='BELOW ARE THE FRAMEWORKS I AM CURRENTLY MOST COMFORTABLE WITH'
						logos={LogoList1}
						limit={5}
					/>
				</Container>
			</div>
		</Fragment>
	);
};

export default MainLanding;
