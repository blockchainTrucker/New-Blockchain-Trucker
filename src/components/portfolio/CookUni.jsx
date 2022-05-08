// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Image, Form, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

// import sub components
import BlogCard from './ProjectCard';

// import data files
import portfolioData from 'routes/portfolio/portfolioData';

const CookUni = (props) => {
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					{portfolioData
						.filter(function (dataSource) {
							return dataSource.title === 'CookUni';
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
										<div>
											<h4>
												Design Systems for Developers
												Geeks a modern, clean and
												accessibility oriented design
												system for developing fast and
												powerful web interfaces.
											</h4>
											<br />
											<p>
												Condimentum leo utipsum euismod
												feugiatn elntum sapiennonser
												variusmi elementum necunc
												elementum velitnon tortor
												convallis variusa placerat
												nequhse. Mauris varius
												ullamcorper tincidsellus egestas
												innisivel sollicituullam
												feugiate facilisis ones
												Suspendisse blandit
												sedtincinean.
											</p>
											<br />
											<p>
												Mauris varius ullamcorper
												tincidsellus egestas innisivel
												sollicituullam feugiate
												facilisis ones velleo finibus
												maximus nequsese sedmattis
												auspendisse{' '}
												<u>
													duimetus ullamcorper
													faucibuse blandit
												</u>{' '}
												sedtincinean.
											</p>
											<p>
												Sint officia nulla deserunt
												voluptate non amet consequat
												ipsum tempor. Nulla id cupidatat
												ipsum occaecat. Aute ad et
												fugiat velit sunt qui veniam
												labore elit ipsum commodo
												proident. Sit tempor consectetur
												commodo laborum mollit. Enim
												sint nostrud nisi in ad aliqua
												laboris ad non.
											</p>
										</div>

										<div>
											<h3>Unordered Lists (Nested)</h3>
											<br />
											<ul>
												<li>
													Lorem ipsum dolor sit amet
												</li>
												<li>
													Consectetur adipiscing elit
												</li>
												<li>
													Integer molestie lorem at
													massa
												</li>
												<li>
													Facilisis in pretium nisl
													aliquet
												</li>
												<li>
													Nulla volutpat aliquam velit
													<ul>
														<li>
															Phasellus iaculis
															neque
														</li>
														<li>
															Purus sodales
															ultricies
														</li>
														<li>
															Vestibulum laoreet
															porttitor sem
														</li>
														<li>
															Ac tristique libero
															volutpat at
														</li>
													</ul>
												</li>
												<li>
													Faucibus porta lacus
													fringilla vel
												</li>
												<li>
													Aenean sit amet erat nunc
												</li>
												<li>Eget porttitor lorem</li>
											</ul>
										</div>
										<div>
											<h3>Ordered List (Nested)</h3>
											<ol>
												<li>
													Lorem ipsum dolor sit amet
												</li>
												<li>
													Consectetur adipiscing elit
												</li>
												<li>
													Integer molestie lorem at
													massa
												</li>
												<li>
													Facilisis in pretium nisl
													aliquet
												</li>
												<li>
													Nulla volutpat aliquam velit
													<ol>
														<li>
															Phasellus iaculis
															neque
														</li>
														<li>
															Purus sodales
															ultricies
														</li>
														<li>
															Vestibulum laoreet
															porttitor sem
														</li>
														<li>
															Ac tristique libero
															volutpat at
														</li>
													</ol>
												</li>
												<li>
													Faucibus porta lacus
													fringilla vel
												</li>
												<li>
													Aenean sit amet erat nunc
												</li>
												<li>Eget porttitor lorem</li>
											</ol>
										</div>
										<div>
											<h2>Image </h2>
											<p>
												Sint officia nulla deserunt
												voluptate non amet consequat
												ipsum tempor. Nulla id cupidatat
												ipsum occaecat. Aute ad et
												fugiat velit sunt qui veniam
												labore elit ipsum commodo
												proident. Sit tempor consectetur
												commodo laborum mollit. Enim
												sint nostrud nisi in ad aliqua
												laboris ad non.
											</p>
											<img
												src='https://codescandy.com/geeks-bootstrap-5/assets/images/blog/center-img.jpg'
												alt=''></img>
										</div>
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

export default CookUni;
