// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

// import data files
import cuHome from '../../assets/images/cookuni/cookuni-home.png';
import recipes from '../../assets/images/cookuni/cookuni-recipes.png';
import details from '../../assets/images/cookuni/cookuni-recipe-details.png';
import signin from '../../assets/images/cookuni/cookuni-signin.png';
import registration from '../../assets/images/cookuni/cookuni-reg.png';
import account from '../../assets/images/cookuni/cookuni-account.png';
import addRecipe from '../../assets/images/cookuni/cookuni-add-recipe.png';

const PizzaKing = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - CookUni';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					<Fragment>
						<Row className='justify-content-center pb-5'>
							<Col xl={10} lg={10} md={10} sm={10} xs={10}>
								<div className='text-center'>
									<h1 className='display-4 fw-bold'>
										CookUni
									</h1>
								</div>
								<div className='text-center'>
									<a href='https://github.com/jwachtel96/CookUni'>
										<Icon path={mdiGithub} size={1} />{' '}
										<span>
											<u>
												Click here to see the repository
											</u>
										</span>
									</a>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={10}
								sm={10}
								xs={10}
								className='mb-2 mb-10'>
								<div>
									<p>
										The CookUni app was my module 4 project
										and it's focus was the frontend. This
										was our first big project and my first
										attempt at making a website. I used,
										Sammy.js, and Handlebars for the
										frontend and Firebase for the database.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col
								xl={5}
								lg={5}
								md={10}
								sm={10}
								xs={10}
								className='mb-2 py-xl-10 py-lg-7'>
								<div>
									<p>
										The Home page was created as a landing
										page. From here the user can login,
										register, or view the recipes.
									</p>
								</div>
							</Col>
							<Col xl={5} lg={5} md={5} sm={10} xs={10}>
								<Image
									src={cuHome}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col xl={5} lg={5} md={5} sm={10} xs={10}>
								<Image
									src={recipes}
									alt=''
									className='img-fluid rounded-3 mb-2'
								/>
							</Col>
							<Col
								xl={5}
								lg={5}
								md={10}
								sm={10}
								xs={10}
								className='mb-2 py-xl-10 py-lg-7'>
								<div>
									<p>
										When the user reaches the Recipes page,
										a query is sent to Firebase, and the
										recipes are then displayed using the
										Handlebars template.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={5} lg={5} md={10} sm={10} className='mb-2'>
								<div className='text-center'>
									<p>
										The Details page shows the instructions
										for the recipe.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col xl={5} lg={5} md={5} sm={10} xs={10}>
								<Image
									src={details}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={10} lg={10} md={10} sm={10}>
								<div className='text-center'>
									<p>
										The Sign In and Registration pages both
										have frontend validation.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col
								xl={5}
								lg={5}
								md={5}
								sm={10}
								xs={10}
								className='mb-6'>
								<Image
									src={signin}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
							<Col
								xl={5}
								lg={5}
								md={5}
								sm={10}
								xs={10}
								className='mb-6'>
								<Image
									src={registration}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col
								xl={5}
								lg={5}
								md={10}
								sm={10}
								className='mb-2 py-xl-10 py-lg-7'>
								{/* Blog Content */}
								<div>
									<p>
										Once the user is registered, a new user
										is created in the database. The Account
										page displays the user data as well as
										any recipes they have created. The user
										has the option to delete an existing
										recipe or create a new one.
									</p>
								</div>
							</Col>
							<Col xl={5} lg={5} md={5} sm={10} xs={10}>
								<Image
									src={account}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col xl={5} lg={5} md={5} sm={10} xs={10}>
								<Image
									src={addRecipe}
									alt=''
									className='img-fluid rounded-3 mb-2'
								/>
							</Col>
							<Col
								xl={5}
								lg={5}
								md={5}
								sm={10}
								xs={10}
								className='py-xl-10 py-lg-7'>
								{/* Blog Content */}
								<div>
									<p>
										The Add a Recipe page has frontend
										validation prior to sending the data to
										Firebase.
									</p>
								</div>
							</Col>
						</Row>
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default PizzaKing;
