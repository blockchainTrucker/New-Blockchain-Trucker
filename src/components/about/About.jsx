// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FrameworkLogos from 'components/landing/FrameworkLogos';
import LogoList from 'routes/frameworkLogos/logoList';
import BackToTop from 'components/functions/BackToTop';

const About = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - About Me';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					<Fragment>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12} className='mb-2'>
								<div className='text-center mb-4'>
									<h1 className='display-4 fw-bold mb-4'>
										About Me
									</h1>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12}>
								<div>
									<p>
										My name is Jesse Wachtel and I recently
										received my Full Stack Developer
										certification from{' '}
										<a href='https://kingslanduniversity.com/zero-to-blockchain-developer-program/'>
											Kingsland University
										</a>{' '}
										by completing their nine month bootcamp.
										The bootcamp was JavaScript focused and
										had an extra emphasis on the MERN stack.
										Since graduation, I began my own
										business,{' '}
										<a
											href='https://www.decentralized-ventures.com'
											target='_blank'>
											Decentralized Ventures
										</a>
										, and have started working on my first
										decentralized platform called{' '}
										<a
											href='https://www.funding-chain.com'
											target='_blank'>
											Funding Chain
										</a>
										. It will be a crowd funding platform
										that uses smart contracts. I am also
										working on my Blockchain Developer
										certification and expext to be complete
										by the Fall.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12} className='mb-2'>
								<FrameworkLogos
									title='BELOW ARE THE FRAMEWORKS I AM CURRENTLY MOST COMFORTABLE WITH'
									logos={LogoList}
									limit={6}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12} className='mb-2'>
								<div>
									<p>
										You may be wondering why I chose the
										name Blockchain Trucker. It has to do
										with where I'm currently at and where
										I'm heading. I currently work as a
										Tractor Trailer Driver and have been
										doing that for the past 7 years. I've
										always been into technology and had been
										following the uprising of various
										blockchains. As I read about them, I
										started understanding the ways they can
										change how we go about our daily tasks
										personally and professionally in the
										future. I started having ideas and
										looked into how I could build
										decentralized apps. That is where{' '}
										<a href='https://kingslanduniversity.com/zero-to-blockchain-developer-program/'>
											Kingsland University
										</a>{' '}
										came into the picture. They had a Zero
										to Blockchain program that was split
										into two parts, Full Stack Developer and
										Blockchain Developer. I started the
										blockchain portion in February 2022.
										During that portion, I am studying how
										to create public and private blockchains
										as well as how to create DApps and write
										smart contracts using Solidity. I am
										also enrolled at the Ira A. Fulton
										Schools of Engineering at Arizona State
										University and will begin working
										towards my undergraduate degree in
										Graphic Information Technology.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={12}
								lg={12}
								md={12}
								sm={12}
								className='mb-2'>
								<div className='text-center mb-2'>
									<span className='ls-md fs-5 text-primary fw-bold'>
										THESE ARE SOME OF THE OTHER SKILLS I'VE
										DEVELOPED OVER THE PAST YEAR
									</span>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={3}
								lg={3}
								md={3}
								sm={12}
								xs={12}
								className='fw-bold px-5'>
								<ul>
									<li>Smart Contracts</li>
									<li>DApps</li>
									<li>JSON Web Token</li>
									<li>Encryption</li>
									<li>Hashing</li>
									<li>Validation</li>
									<li>Sanitization</li>
									<li>Truffle</li>
									<li>Unit Testing</li>
								</ul>
							</Col>
							<Col
								xl={3}
								lg={3}
								md={3}
								sm={12}
								xs={12}
								className='mb-2 fw-bold px-5'>
								<ul>
									<li>API Development</li>
									<li>CORS</li>
									<li>Templating</li>
									<li>Cookies</li>
									<li>SCSS</li>
									<li>CSS</li>
									<li>HTML</li>
									<li>AWS Amplify</li>
									<li>Heroku</li>
								</ul>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12} className='mb-2'>
								<div>
									<p>
										My professional life began when I joined
										the US Army at seventeen. I spent a
										little over four years in the service,
										including a year deployed to Iraq with
										the 1st Cavalry Division. After I was
										discharged, I jumped into
										telecommunication sales working for a
										company based out of Ogen, UT named
										Marketstar. I did well and was promoted
										to becoming the sales manager of the
										location I worked in. In that role, I
										was responsible for my sales as well as
										my team of five. Eventually, I accepted
										a position with the same company as the
										Blackberry brand advocate (back when
										Blackberry was still cool) for a
										territory in South Florida from Port St.
										Lucie to Fort Lauderdale and over to
										Fort Myers and Cape Coral. In that
										position, I visited wireless retail
										stores of all brands and taught the
										employees tips and tricks and how to use
										the features and benefits of the devices
										to sell more. I was also responsible for
										territory sales and identified locations
										to focus on to reach goals. I regularly
										conducted classroom style training as
										well as taking part in special events.
										My final role prior to deciding to start
										driving a truck was as a Retail
										Associate Manager for T-Mobile. During
										that time, I was responsible for a team
										of up to ten sales associates and an
										operations associate. I strived to
										create a team that was competitive but
										would also work together. My sales
										philosophy was was centered around
										product knowledge and I constantly
										coached my team to become as
										knowledgeable as possible on our
										products as well as competitors. This
										resulted in success month after month
										not only in sales, but also with
										customer satisfaction.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12} className='mb-2'>
								<div className='mb-8 mb-lg-0'>
									<Link
										to='/portfolio'
										className='btn btn-primary me-3 mb-3 mb-lg-0'>
										See Portfolio
									</Link>
									<Link
										to='/contact-me'
										className='text-nowrap btn-link'>
										Want to chat? Click here
									</Link>
								</div>
							</Col>
						</Row>
						<BackToTop />
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default About;
