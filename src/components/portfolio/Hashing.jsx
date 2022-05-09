// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiGithub, mdiArrowUpBoldCircle } from '@mdi/js';
import bcrypt1 from '../../assets/images/bcrypt/bcrypt1.png';
import bcrypt2 from '../../assets/images/bcrypt/bcrypt2.png';
import bcrypt3 from '../../assets/images/bcrypt/bcrypt3.png';
import bcrypt4 from '../../assets/images/bcrypt/bcrypt4.png';

const PizzaKing = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Hashing with Bcrypt';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					<Fragment>
						<Row className='justify-content-center pb-5'>
							<Col xl={12} lg={12} md={12} sm={12}>
								<div className='text-center'>
									<h1 className='display-4 fw-bold'>
										Hashing Example with Bcrypt
									</h1>
								</div>
								<div className='text-center'>
									<a href='https://github.com/jwachtel96/Pizza-King/tree/master/api'>
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
								className='mb-2 mb-10 text-center'>
								<div>
									<p>
										This example shows the way I used Bcrypt
										to hash and compare passwords in my
										Pizza King API.
									</p>
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
								className='mb-2 text-center'>
								<div>
									<p>
										I put my salt options in the
										configuration file and then imported it
										as well as Bcrypt itself.
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
									src={bcrypt3}
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
									src={bcrypt2}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col xl={5} lg={5} md={5} sm={10} xs={10}>
								<Image
									src={bcrypt1}
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
										Following validation, the hashing
										function is completed. Then the entry is
										saved to the database.
									</p>
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
								className='mb-2 text-center'>
								<div>
									<p>
										Then we compare the user entered
										password with the one we previously
										saved to the database.
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
									src={bcrypt4}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<Row className='text-center py-10 text-primary'>
							<Col xl={12} lg={12} md={12} sm={12} xs={12}>
								<a href=''>
									{' '}
									<Icon
										path={mdiArrowUpBoldCircle}
										size={2}
										onClick={() => {
											window.scrollTo(0, 0);
										}}
									/>{' '}
								</a>
							</Col>
						</Row>
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default PizzaKing;
