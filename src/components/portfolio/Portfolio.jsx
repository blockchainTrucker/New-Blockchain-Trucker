// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import portfolioData from 'routes/portfolio/portfolioData';

const Portfolio = () => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Portfolio';
	}, []);
	return (
		<Fragment>
			<div className='pt-9 pb-5 bg-white'>
				<Container>
					<Row>
						<Col
							lg={{ span: 10, offset: 1 }}
							xl={{ span: 8, offset: 2 }}
							md={12}
							sm={12}>
							<div className='text-center mb-4'>
								<h1 className='display-4 fw-bold'>
									My Portfolio
								</h1>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			{/* Page Content */}
			<div className='pb-12 bg-white'>
				<Container>
					<Row className='justify-content-center'>
						{portfolioData.map((item, index) => (
							<Col
								xl={4}
								lg={4}
								md={6}
								sm={12}
								key={index}
								className='d-flex'>
								<ProjectCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</Fragment>
	);
};

export default Portfolio;
