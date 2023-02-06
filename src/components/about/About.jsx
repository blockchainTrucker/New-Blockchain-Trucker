// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FrameworkLogos from 'components/landing/FrameworkLogos';
import LogoList from 'routes/frameworkLogos/logoList';
import BackToTop from 'components/functions/BackToTop';
import ModalImage from 'react-modal-image';
import fsCert from 'assets/images/about/fsCert.jpg';
import blockchainCert from 'assets/images/about/blockchainCert.jpg';

const About = () => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - About Me';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					<Fragment>
						<Row className='justify-content-center'>
							<Col className='mb-2'>
								<div className='text-center mb-4'>
									<h1 className='display-4 fw-bold mb-4'>
										About Me
									</h1>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={10} lg={10} md={10} sm={12} xs={12}>
								<div>
									<p>
										My name is Jesse Wachtel. Over the past
										two years, I have been working to
										complete the Zero to Blockchain program
										at{' '}
										<a href='https://kingslanduniversity.com/zero-to-blockchain-developer-program/'>
											Kingsland University
										</a>
										. The program was split into two parts.
										The first part was a nine month Full
										Stack Developer bootcamp. It was
										JavaScript focused and had an emphasis
										on the MERN stack. I received my
										certification as a Full Stack Developer
										in December of 2021. After graduating, I
										began my own business,{' '}
										<a
											href='https://www.decentralized-ventures.com'
											target='_blank'>
											Decentralized Ventures
										</a>
										, and have started working on my first
										DApp called{' '}
										<a
											href='https://www.funding-chain.com'
											target='_blank'>
											Funding Chain
										</a>
										. It will be a crowd funding platform
										that uses smart contracts to collect and
										distribute contributions. I began
										working on my Blockchain Engineer
										certification while building{' '}
										<a
											href='https://www.funding-chain.com'
											target='_blank'>
											Funding Chain
										</a>{' '}
										and have incorporated some of what I
										learned from school into it. The
										Blockchain Engineer portion of the
										program covered a wide range of topics
										such as cryptography and elliptic
										curves, public and private blockchain
										devopment, mining, DApp development,
										smart contract development including
										ERC20 and ERC721. There was an emphasis
										on the Ethereum blockchain. There were
										two advanced projects required in order
										to graduate, a DApp that deployed smart
										contracts and a custom blockchain
										network. I received my certification as
										a Blockchain Engineer in January of
										2023.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-3'>
							<Col
								className='mx-3 mt-3'
								xl={3}
								lg={3}
								md={3}
								sm={12}
								xs={12}>
								<ModalImage
									className='pop corners'
									small={fsCert}
									large={fsCert}
									alt='Pizza King homepage'
								/>
							</Col>
							<Col
								className='mx-3 mt-3'
								xl={3}
								lg={3}
								md={3}
								sm={12}
								xs={12}>
								<ModalImage
									className='pop corners'
									small={blockchainCert}
									large={blockchainCert}
									alt='Pizza King menu '
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12}>
								<FrameworkLogos
									title='BELOW ARE THE ENVIRONMENTS FRAMEWORKS I AM CURRENTLY MOST COMFORTABLE WITH'
									logos={LogoList}
									limit={6}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col xl={9} lg={9} md={12} sm={12}>
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
										came into the picture.
									</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col className='mb-2'>
								<div className='text-center mb-2'>
									<span className='ls-md fs-5 text-primary fw-bold'>
										BELOW ARE SOME OF THE OTHER SKILLS I
										HAVE DEVELOPED
									</span>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={3}
								lg={3}
								md={3}
								sm={5}
								xs={6}
								className='fw-bold justify-content-center px-7'>
								<ul>
									<li>Smart Contracts</li>
									<li>DApps</li>
									<li>Remix</li>
									<li>Truffle/Ganache</li>
									<li>Unit Testing</li>
									<li>JSON Web Token</li>
									<li>Reusable Code</li>
									<li>User Management</li>
									<li>Encryption</li>
									<li>Hashing</li>
									<li>Validation</li>
									<li>Sanitization</li>
								</ul>
							</Col>
							<Col
								xl={3}
								lg={3}
								md={3}
								sm={5}
								xs={6}
								className='mb-2 fw-bold px-5'>
								<ul>
									<li>API Development</li>
									<li>Database Design</li>
									<li>Express</li>
									<li>Webpack</li>
									<li>Templating</li>
									<li>Cookies</li>
									<li>SCSS</li>
									<li>CSS</li>
									<li>HTML</li>
									<li>AWS Amplify</li>
									<li>Heroku</li>
									<li>Atlas</li>
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
