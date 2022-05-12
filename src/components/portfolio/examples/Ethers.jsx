// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Header from '../../../functions/Header';
import BackToTop from '../../../functions/BackToTop';
import create from '../../../assets/images/ethers/create.jpg';
import load from '../../../assets/images/ethers/load.jpg';
import recover from '../../../assets/images/ethers/recover.jpg';
import balance from '../../../assets/images/ethers/balance.jpg';
import send from '../../../assets/images/ethers/send.jpg';
const Ethers = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Etherium Wallet Example';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white '>
				<Container>
					<Fragment>
						<Header
							title='Etherium Wallet Using Ethers.js'
							github='https://github.com/jwachtel96/Assignments/tree/main/ethereum-wallet-ethersjs'
						/>
						<Row className='justify-content-center'>
							<Col
								xl={10}
								lg={10}
								md={10}
								sm={10}
								xs={10}
								className='mb-2'>
								<div>
									<p>
										In this example, I used Ethers.js within
										a single page application to create a
										simple Etherium wallet that uses
										encrypted keystore files. The wallet is
										capable of creating a new wallet,
										loading an existing wallet from a file,
										recovering a wallet using the mnemonic
										phrase, showing the balance of a wallet,
										and sending Etherium tokens.
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
									src={create}
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
									src={load}
									alt=''
									className='img-fluid rounded-3'
								/>
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
									src={recover}
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
									src={recover}
									alt=''
									className='img-fluid rounded-3'
								/>
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
									src={balance}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						{/* <Row className='justify-content-center'>
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
						</Row> */}
						<BackToTop />
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default Ethers;
