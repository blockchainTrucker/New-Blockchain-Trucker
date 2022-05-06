// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import sub components
import BlogCard from './BlogCard';

// import data files
import portfolioData from 'routes/portfolio/portfolioData';

const BlogCategory = () => {
	return (
		<Fragment>
			{/* Page header */}
			<div className='pt-9 pb-9 bg-white'>
				<Container>
					<Row>
						<Col
							lg={{ span: 10, offset: 1 }}
							xl={{ span: 8, offset: 2 }}
							md={12}
							sm={12}>
							<div className='text-center mb-5'>
								<h1 className='display-3 fw-bold'>
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
					<Row>
						{portfolioData.map((item, index) => (
							<Col
								xl={4}
								lg={4}
								md={6}
								sm={12}
								key={index}
								className='d-flex'>
								<BlogCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</Fragment>
	);
};

export default BlogCategory;
