// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

// import data files
import pkHome from '../../assets/images/pizza-king/pizza-king-home.png';
import pkAccount from '../../assets/images/pizza-king/pizza-king-account.png';
import pkRegistration from '../../assets/images/pizza-king/pizza-king-registration.png';
import pkSignin from '../../assets/images/pizza-king/pizza-king-signin.png';
import pkCheckout from '../../assets/images/pizza-king/pizza-king-checkout.png';

const PizzaKing = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Pizza King';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					<Fragment>
						<Row className='justify-content-center'>
							<Col
								xl={12}
								lg={12}
								md={12}
								sm={12}
								className='mb-10'>
								<div className='text-center'>
									<h1 className='display-3 fw-bold'>
										Pizza King
									</h1>
								</div>
								<div className='text-center'>
									<a href='https://github.com/jwachtel96/Pizza-King'>
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
						<Row className='justify-content-center mb-10'>
							{/* Image */}
							<Col
								xl={3}
								lg={4}
								md={6}
								sm={8}
								xs={10}
								className='mb-6'>
								<Image
									src={pkHome}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
							<Col xl={4} lg={4} md={12} sm={12} className='mb-2'>
								{/* Blog Content */}
								<div>
									<br />
									<p className='py-5'>
										The Pizza King app was my final project
										for my Full Stack Developer bootcamp. I
										made it using React.js for the frontend,
										and Node.js with MongoDB for the
										backend. Since I chose to create a pizza
										resturant app, I decided to set up the
										layout for a good user experience on
										mobile devices. All of the CSS is
										custom.
									</p>
									<p>
										The home and menu pages are the only two
										pages that guest users can access. The
										Menu component uses cookies to store the
										cart data as an array. The cart icon in
										the navigation bar displays how many
										items are in the cart using the length
										of the cart.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col
								xl={5}
								lg={5}
								md={12}
								sm={12}
								className='mb-2 py-xl-5'>
								{/* Blog Content */}
								<div>
									<p>
										When the user clicks the Review Order
										button, they are routed to the login
										page. If the user does not have an
										account set up yet, there is a link to
										the registration page. Both pages are
										similar in layout and functionality.
										They have full client-side as well as
										server-side and database validation.
										User context is kept using the state.
										Password encryption and validation is
										completed using Bcrypt. The user context
										is then encoded on the backend with JSON
										Web Token and sent to the frontend as a
										cookie.
									</p>
								</div>
							</Col>
							<Col
								xl={4}
								lg={4}
								md={6}
								sm={8}
								xs={10}
								className='mb-6'>
								<Image
									src={pkAccount}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={8} lg={8} md={12} sm={12} className='mb-2'>
								<div>
									<p>
										When login is completed, the user is
										routed to the My Account page. On this
										page, the user can review and remove
										items from the cart, continue to
										checkout, or review the past three
										orders and choose to order them again.
										There is client-side validation as well
										as server-side and database validation
										to ensure empty orders are not placed.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col
								xl={4}
								lg={4}
								md={6}
								sm={8}
								xs={10}
								className='mb-6'>
								<Image
									src={pkRegistration}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
							<Col
								xl={4}
								lg={4}
								md={6}
								sm={8}
								xs={10}
								className='mb-6'>
								<Image
									src={pkSignin}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={8} lg={8} md={12} sm={12} className='mb-2'>
								{/* Blog Content */}
								<div>
									<p>
										Once the order was successfully created,
										the user will be routed to the Order
										Placed page. The new order will then
										show on their My Account page.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							{/* Image */}
							<Col
								xl={4}
								lg={4}
								md={6}
								sm={8}
								xs={10}
								className='mb-6'>
								<Image
									src={pkCheckout}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default PizzaKing;
