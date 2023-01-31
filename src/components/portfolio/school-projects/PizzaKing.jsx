// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Header from '../../functions/Header';
import ModalImage from 'react-modal-image';
import BackToTop from '../../functions/BackToTop';
import { CopyBlock, dracula } from 'react-code-blocks';
import pkHome from '../../../assets/images/pizza-king/pizzaKingHomeLarge.jpg';
import pkMenu from '../../../assets/images/pizza-king/pizzaKingMenuLarge.jpg';
import pkAccount from '../../../assets/images/pizza-king/pizza-king-account.png';
import pkRegistration from '../../../assets/images/pizza-king/PizzaKingSignupLarge.jpg';
import pkSignin from '../../../assets/images/pizza-king/PizzaKingSigninLarge.jpg';
import pkCheckout from '../../../assets/images/pizza-king/pizza-king-checkout.png';
import { menuExample, cartExample, registrationExample } from './projectTxt';

const PizzaKing = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Pizza King';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					<Fragment>
						<Header
							title='Pizza King'
							github='https://github.com/jwachtel96/Pizza-King'
						/>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={10}
								sm={12}
								xs={12}
								className='mb-3'>
								<p>
									{
										"The Pizza King app was my final project for my Full Stack Developer bootcamp. It was my first React application and the first time I used MongoDB in an application. I hadn't taught myself Bootstrap yet when I made this application, but I did continue to expand my knowledge base with CSS on this project. The backend is a Node.js environment with an Express server."
									}
								</p>
								<p>
									{
										'Throughout this example, I will show images of the frontend of the section being discussed as well as the relevant code.'
									}
								</p>
								<p>
									{
										'The home and menu pages are the only pages that guest users can access. Since this was my first time using React, I did not know how to transfer state or hoist so the Menu component uses cookies to store the cart data as an array. The cart icon in the navigation bar displays how many items are in the cart using the length of the cart.'
									}
								</p>
							</Col>
						</Row>
						<Row className='justify-content-center mb-5'>
							<Col
								className='mx-3'
								xl={3}
								lg={3}
								md={5}
								sm={12}
								xs={12}>
								<ModalImage
									className='pop corners'
									small={pkHome}
									large={pkHome}
									alt='Pizza King homepage'
								/>
							</Col>
							<Col
								className='mx-3'
								xl={3}
								lg={3}
								md={5}
								sm={12}
								xs={12}>
								<ModalImage
									className='pop corners'
									small={pkMenu}
									large={pkMenu}
									alt='Pizza King menu '
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-5'>
							<Col xl={10} lg={10} md={10} sm={12} xs={12}>
								<CopyBlock
									text={menuExample}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
									customStyle={{
										height: '400px',
										overflowY: 'scroll',
										margin: '0px 0.75rem',
										borderRadius: '5px',
										boxShadow:
											'1px 2px 3px rgba(0,0,0,0.35)',
										fontSize: '0.75rem',
									}}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-3'>
							<Col xl={10} lg={10} md={10} sm={12} xs={12}>
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
						</Row>
						<Row className='justify-content-center mb-5'>
							<Col
								className='mx-3'
								xl={4}
								lg={4}
								md={4}
								sm={12}
								xs={12}>
								<ModalImage
									className='pop corners'
									small={pkSignin}
									large={pkSignin}
									alt='Pizza King homepage'
								/>
							</Col>
							<Col
								className='mx-3'
								xl={4}
								lg={4}
								md={4}
								sm={12}
								xs={12}>
								<ModalImage
									className='pop corners'
									small={pkRegistration}
									large={pkRegistration}
									alt='Pizza King menu '
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-5'>
							<Col xl={10} lg={10} md={10} sm={12} xs={12}>
								<CopyBlock
									text={registrationExample}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
									customStyle={{
										height: '400px',
										overflowY: 'scroll',
										margin: '0px 0.75rem',
										borderRadius: '5px',
										boxShadow:
											'1px 2px 3px rgba(0,0,0,0.35)',
										fontSize: '0.75rem',
									}}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={10}
								sm={12}
								xs={12}
								className='mb-3'>
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
						<Row className='justify-content-center mb-5'>
							<Col
								className='mx-3'
								xl={7}
								lg={7}
								md={7}
								sm={12}
								xs={12}>
								<ModalImage
									className='pop corners'
									small={pkAccount}
									large={pkAccount}
									alt='Pizza King homepage'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-5'>
							<Col
								className='mx-3'
								xl={10}
								lg={10}
								md={10}
								sm={12}
								xs={12}>
								<CopyBlock
									text={cartExample}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
									customStyle={{
										height: '400px',
										overflowY: 'scroll',
										margin: '0px 0.75rem',
										borderRadius: '5px',
										boxShadow:
											'1px 2px 3px rgba(0,0,0,0.35)',
										fontSize: '0.75rem',
									}}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={10}
								sm={12}
								xs={12}
								className='mb-3'>
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
						<Row className='justify-content-center mb-5'>
							<Col xl={6} lg={6} md={6} sm={12} xs={12}>
								<ModalImage
									className='pop corners'
									small={pkCheckout}
									large={pkCheckout}
									alt='Pizza King homepage'
								/>
							</Col>
						</Row>
						<Row>
							<Header
								description='Click here to view the full repository'
								github='https://github.com/jwachtel96/Pizza-King'
							/>
						</Row>
						<BackToTop />
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default PizzaKing;
