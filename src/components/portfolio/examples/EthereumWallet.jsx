// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Header from '../../functions/Header';
import BackToTop from '../../functions/BackToTop';
import create from '../../../assets/images/ethers/create.jpg';
import load from '../../../assets/images/ethers/load.jpg';
import recover from '../../../assets/images/ethers/recover.jpg';
import balance from '../../../assets/images/ethers/balance.jpg';
import send from '../../../assets/images/ethers/send.jpg';
import { CopyBlock, dracula } from 'react-code-blocks';
import {
	walletCreate,
	walletLoad,
	walletRecover,
	walletBalances,
	walletSend,
} from './exampleTxt';
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
									<p>
										In this example, I used Ethers.js within
										an Embedded JavaScript single page
										application to create a simple Etherium
										wallet that uses encrypted keystore
										files. The wallet is capable of creating
										a new wallet, loading an existing wallet
										from a file, recovering a wallet using
										the mnemonic phrase, showing the balance
										of a wallet, and sending Etherium
										tokens. Below is the code for each route
										and an image of that route's frontend.
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-3' md={6}>
									<ModalImage
										small={create}
										large={create}
										// alt={chain.title}
										imageBackgroundColor='white'
									/>
								</Col>
								<CopyBlock
									text={walletCreate}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-3' md={6}>
									<ModalImage
										small={load}
										large={load}
										// alt={chain.title}
										imageBackgroundColor='white'
									/>
								</Col>
								<CopyBlock
									text={walletLoad}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-3' md={6}>
									<ModalImage
										small={recover}
										large={recover}
										// alt={chain.title}
										imageBackgroundColor='white'
									/>
								</Col>
								<CopyBlock
									text={walletRecover}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-10'>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-3' md={6}>
									<ModalImage
										small={balance}
										large={balance}
										// alt={chain.title}
										imageBackgroundColor='white'
									/>
								</Col>
								<CopyBlock
									text={walletBalances}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mb-3'>
							<Col md={10} className='mb-6'>
								<Col className='mx-auto mb-3' md={6}>
									<ModalImage
										small={send}
										large={send}
										// alt={chain.title}
										imageBackgroundColor='white'
									/>
								</Col>
								<CopyBlock
									text={walletSend}
									language={'jsx'}
									showLineNumbers={false}
									theme={dracula}
								/>
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
