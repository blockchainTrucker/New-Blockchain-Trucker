// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import vtHome from '../../assets/images/video-tutorials/video-tutorials-home-loggedout.png';
import vtHome2 from '../../assets/images/video-tutorials/video-tutorials-home-loggedin.png';
import vtReg from '../../assets/images/video-tutorials/video-tutorials-reg.png';
import vtSignin from '../../assets/images/video-tutorials/video-tutorials-signin.png';
import vtSearch from '../../assets/images/video-tutorials/video-tutorials-search.png';
import vtDetails from '../../assets/images/video-tutorials/video-tutorials-details-unsubscribed.png';
import vtDetails2 from '../../assets/images/video-tutorials/video-tutorials-details-subscribed.png';
import vtAccount from '../../assets/images/video-tutorials/video-tutorials-account.png';
import vtEdit from '../../assets/images/video-tutorials/video-tutorials-edit.png';
import vtCreate from '../../assets/images/video-tutorials/video-tutorials-create.png';

const PizzaKing = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Video Tutorials';
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
										Video Tutorials
									</h1>
								</div>
								<div className='text-center'>
									<a href='https://github.com/jwachtel96/Video-Tutorials'>
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
								md={12}
								sm={12}
								className='mb-2'>
								<div>
									<p>
										The Video Tutorials app was my module 5
										project and the focus was on the
										backend. I used Node.js, Express.js, and
										MongoDB to create it. All of the CSS is
										custom.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={5}
								lg={5}
								md={5}
								sm={10}
								xs={10}
								className='mb-6'>
								<Image
									src={vtHome}
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
									src={vtHome2}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={12}
								sm={12}
								className='mb-10'>
								<div>
									<p>
										This app has two Home pages, one for
										guest users and one for authenticated
										users. When the user reaches the guest
										Home page, a query is sent to the
										database for the tutorials, and the
										response is sorted by subscribed users.
										The top three tutorials are displayed.
										When the user clicks a tutorial, they
										are routed to the Login page.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={10} lg={10} md={12} sm={12}>
								<div>
									<p>
										The Login and Registration pages are
										created similarly, and have client-side
										as well as server-side and database
										validation. They use Bcrypt for password
										encryption and authentication. JSON Web
										Token was used for user information
										encoding and decoding. The user
										information is then stored as a cookie.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-3'>
							<Col xl={5} lg={5} md={5} sm={12} xs={12}>
								<Image
									src={vtReg}
									alt=''
									className='img-fluid rounded-3 mb-2'
								/>
							</Col>
							<Col xl={5} lg={5} md={5} sm={12} xs={12}>
								<Image
									src={vtSignin}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col xl={10} lg={10} md={12} sm={12}>
								<div>
									<p>
										After logging in, the user is routed to
										the Home page for authenticated users.
										This page shows all of the public
										tutorials sorted by subscribers. The
										user can click on a tutorial to be
										brought to the Details page.
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
								className='mb-2 py-xl-10 py-lg-7'>
								{/* Blog Content */}
								<div>
									<p>
										The user has the option to search for a
										tutorial. The algorithm is simple and
										searches by title and then user.
									</p>
								</div>
							</Col>
							<Col xl={5} lg={5} md={5} sm={12} xs={12}>
								<Image
									src={vtSearch}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={12}
								sm={12}
								className='mb-2'>
								<div className='text-center'>
									<p>
										The Details page has an image for the
										tutorial short description.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={5}
								lg={5}
								md={5}
								sm={10}
								xs={10}
								className='mb-6'>
								<Image
									src={vtDetails}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
							<Col
								xl={5}
								lg={5}
								md={6}
								sm={8}
								xs={10}
								className='mb-6'>
								<Image
									src={vtDetails2}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={10}
								sm={10}
								className='mb-10 text-center'>
								<div>
									<p>
										Once the user is subscribed to the
										tutorial, the embeded video will load
										and they will be able to watch the
										tutorial.
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
								className='py-xl-10 py-lg-7'>
								{/* Blog Content */}
								<div>
									<p>
										On the navigation bar, if the user
										clicks the welcome message with their
										name, they will be routed to the Profile
										page. The user's information will be
										displayed, as well as all tutorials the
										user uploaded.
									</p>
								</div>
							</Col>
							<Col xl={5} lg={5} md={5} sm={10} xs={10}>
								<Image
									src={vtAccount}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col xl={5} lg={5} md={12} sm={12} xs={12}>
								<Image
									src={vtEdit}
									alt=''
									className='img-fluid rounded-3 mb-2'
								/>
							</Col>
							<Col
								xl={5}
								lg={5}
								md={12}
								sm={12}
								className='py-xl-10 py-lg-7'>
								{/* Blog Content */}
								<div className='text-center'>
									<p>
										The user will have the option to delete
										or edit any tutorial previously
										uploaded.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={5}
								lg={5}
								md={12}
								sm={12}
								className='py-xl-8 py-lg-7'>
								{/* Blog Content */}
								<div>
									<p>
										By clicking Creat a Tutorial on the
										navigation bar, the user will be brought
										to the Create Tutorial page. This page
										uses client-side as well as server-side
										and database validation to ensure valid
										data is entered. The user also has the
										option to make the tutorial public or
										private. Public is the default option.
									</p>
								</div>
							</Col>
							<Col xl={5} lg={5} md={12} sm={12} xs={12}>
								<Image
									src={vtCreate}
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
