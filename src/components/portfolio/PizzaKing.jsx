// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Image, Form, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

// import sub components
import BlogCard from './BlogCard';

// import data files
import portfolioData from 'routes/portfolio/portfolioData';

const PizzaKing = (props) => {
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					{portfolioData
						.filter(function (dataSource) {
							return dataSource.title === 'Pizza King';
						})
						.map((item, index) => (
							<Fragment key={index}>
								<Row className='justify-content-center'>
									<Col
										xl={8}
										lg={8}
										md={12}
										sm={12}
										className='mb-2'>
										<div className='text-center mb-4'>
											<h1 className='display-3 fw-bold mb-4'>
												{item.title}
											</h1>
										</div>
									</Col>
								</Row>
								<Row className='justify-content-center'>
									{/* Image */}
									<Col
										xl={8}
										lg={8}
										md={12}
										sm={12}
										className='mb-6'>
										<Image
											src={item.image}
											alt=''
											className='img-fluid rounded-3'
										/>
									</Col>
								</Row>
								<Row className='justify-content-center'>
									<Col
										xl={8}
										lg={8}
										md={12}
										sm={12}
										className='mb-2'>
										{/* Blog Content */}
										<div
											dangerouslySetInnerHTML={{
												__html: item.content,
											}}></div>
										<hr className='mt-8 mb-5' />
										{/* Author */}

										{/* Subscribe to Newsletter */}
										<div className='py-12'>
											<div className='text-center mb-6'>
												<h2 className='display-4 fw-bold'>
													Sign up for our Newsletter
												</h2>
												<p className='mb-0 lead'>
													Join our newsletter and get
													resources, curated content,
													and design inspiration
													delivered straight to your
													inbox.
												</p>
											</div>
										</div>
									</Col>
								</Row>
							</Fragment>
						))}
				</Container>

				{/* Related Post */}
			</div>
		</Fragment>
	);
};

export default PizzaKing;
