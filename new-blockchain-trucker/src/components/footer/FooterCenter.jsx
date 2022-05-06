// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCenter = () => {
	return (
		<div className='py-lg-5 py-5 bg-white'>
			<Container>
				<Row className='justify-content-center text-center  '>
					{/*  Desc  */}
					<Col lg={8} md={12} sm={12}>
						<div className='my-6'>
							{/* Facebook */}
							<a
								href='https://www.facebook.com/DecentralizedVenturesLLC'
								target='_blank'
								className='text-muted me-4'>
								<i className='fab fa-facebook fs-3'></i>
							</a>
							{/* Twitter */}
							<a
								href='https://www.instagram.com/decentralizedventures/'
								target='_blank'
								className='text-muted me-4'>
								<i className='fab fa-instagram fs-3'></i>
							</a>
							{/* LinkedIn */}
							<a
								href='https://www.linkedin.com/company/decentralized-ventures'
								target='_blank'
								className='text-muted me-4'>
								<i className='fab fa-linkedin fs-3'></i>
							</a>
							{/* GitHub */}
						</div>
					</Col>
					<Col lg={8} md={12} sm={12}>
						<span>
							© 2022 Decentralized Ventures, LLC. All Rights
							Reserved
						</span>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterCenter;
