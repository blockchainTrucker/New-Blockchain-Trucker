// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Header from '../../functions/Header';
import BackToTop from '../../functions/BackToTop';
import create from 'assets/images/ethereumWallet/create.jpg';
import load from 'assets/images/ethereumWallet/load.jpg';
import recover from 'assets/images/ethereumWallet/recover.jpg';
import balance from 'assets/images/ethereumWallet/balance.jpg';
import send from 'assets/images/ethereumWallet/send.jpg';
import { CopyBlock, dracula } from 'react-code-blocks';
import {
	walletCreate,
	walletLoad,
	walletRecover,
	walletBalances,
	walletSend,
	ewTxt1,
} from '../../../data/exampleTxt';
import ModalImage from 'react-modal-image';

const EthereumWallet = (props) => {
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
									<p>{ewTxt1}</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<h3 className='text-center mb-3'>
								Create Wallet Route
							</h3>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-4' md={6}>
									<ModalImage
										className='corners pop'
										small={create}
										large={create}
										alt={
											"Image of the Create route's frontend"
										}
										imageBackgroundColor='white'
									/>
								</Col>
								<div className='pop'>
									<CopyBlock
										text={walletCreate}
										language={'jsx'}
										showLineNumbers={false}
										theme={dracula}
									/>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<h3 className='text-center mb-3'>
								Load Wallet Route
							</h3>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-4' md={6}>
									<ModalImage
										className='corners pop'
										small={load}
										large={load}
										alt={
											"Image of the Load route's frontend"
										}
										imageBackgroundColor='white'
									/>
								</Col>
								<div className='pop'>
									<CopyBlock
										text={walletLoad}
										language={'jsx'}
										showLineNumbers={false}
										theme={dracula}
									/>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<h3 className='text-center mb-3'>
								Recover Wallet Route
							</h3>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-4' md={6}>
									<ModalImage
										className='corners pop'
										small={recover}
										large={recover}
										alt={
											"Image of the Recover route's frontend"
										}
										imageBackgroundColor='white'
									/>
								</Col>
								<div className='pop'>
									<CopyBlock
										text={walletRecover}
										language={'jsx'}
										showLineNumbers={false}
										theme={dracula}
									/>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<h3 className='text-center mb-3'>
								Wallet Balances Route
							</h3>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-4' md={6}>
									<ModalImage
										className='corners pop'
										small={balance}
										large={balance}
										alt={
											"Image of the Balance route's frontend"
										}
										imageBackgroundColor='white'
									/>
								</Col>
								<div className='pop'>
									<CopyBlock
										text={walletBalances}
										language={'jsx'}
										showLineNumbers={false}
										theme={dracula}
									/>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-3'>
							<h3 className='text-center mb-3'>Send Route</h3>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-4' md={6}>
									<ModalImage
										className='corners pop'
										small={send}
										large={send}
										alt={
											"Image of the Send route's frontend"
										}
										imageBackgroundColor='white'
									/>
								</Col>
								<div className='pop'>
									<CopyBlock
										text={walletSend}
										language={'jsx'}
										showLineNumbers={false}
										theme={dracula}
									/>
								</div>
							</Col>
						</Row>
						<Row>
							<Header
								description='Click here to view the full repository'
								github='https://github.com/jwachtel96/Assignments/tree/main/ethereum-wallet-ethersjs'
							/>
						</Row>
						<BackToTop />
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default EthereumWallet;
