import { Container, Col, Row } from 'react-bootstrap';

const HeroContent = () => {
	return (
		<Container>
			<Row>
				<Col
					lg={{ span: 10, offset: 1 }}
					md={12}
					sm={12}
					className='mb-12 hero-txt'>
					<h1 className='fw-bold mb-3 fs-sm-1 '>
						<span className='text-primary'>Revolutionizing</span>{' '}
						the everyday internet with{' '}
						<span className='text-primary'>Decentralization</span>
					</h1>
					<p className='mb-lg-10 lead text-dark'>
						We’re building the best next-generation full stack Web
						3.0 applications that will seamlessly change how
						everyday tasks are completed on the internet with the
						use of smart contracts and blockchains.
					</p>
				</Col>
			</Row>
		</Container>
	);
};
export default HeroContent;
