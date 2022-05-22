// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Header from '../../functions/Header';
import BackToTop from '../../functions/BackToTop';
import hg1 from '../../../assets/images/hunger-games/hunger-games-1.jpg';
import hg2 from '../../../assets/images/hunger-games/hunger-games-2.jpg';
import hg3 from '../../../assets/images/hunger-games/hunger-games-3.jpg';
import hg4 from '../../../assets/images/hunger-games/hunger-games-4.jpg';
import hg5 from '../../../assets/images/hunger-games/hunger-games-5.jpg';
const Ethers = (props) => {
	useEffect(() => {
		document.title = 'Blockchain Trucker - Etherium Wallet Example';
	}, []);
	return (
		<Fragment>
			<div className='py-4 py-lg-8 pb-14 bg-white'>
				<Container>
					<Fragment>
						<Header
							title='Hunger Games'
							github='https://github.com/jwachtel96/Assignments/tree/main/hunger-games'
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
										This example was a school assignment in
										my Advanced Solidity course. The
										instructions are the following:
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
								className='mb-2'>
								<div>
									<p>
										<i>
											Every year in the ruins of what was
											once North America, the Capitol of
											the nation of Panem, a
											technologically advanced, utopian
											city where the nation's most wealthy
											and powerful citizens live, each of
											its 12 districts are forced to send
											a teenage boy and a girl between the
											ages of 13 and 18 to compete in the
											annual Hunger Games: a nationally
											televised event in which 'tributes'
											fight each other within an arena
											until one survivor remains.
											Implement a Capitol contract with
											the following requirements:
										</i>
									</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col
								xl={8}
								lg={8}
								md={10}
								sm={10}
								xs={10}
								className='mb-2'>
								<div>
									<i>
										<ul>
											<li>
												Create a districts enum with 12
												entries
												<ul>
													<li>
														Each entry is named
														District1, District2,
														District3 ... and so on
														until District 12
													</li>
												</ul>
											</li>
											<li>
												function registerTribute() -
												registers a player’s name, age,
												district, gender, and status
												<ul>
													<li>
														Use struct for storing
														the person details.
													</li>
													<li>
														Use enums for the gender
														information
													</li>
													<li>
														The status should
														indicate if the player
														is dead or alive. You
														may use enums. (default
														status: alive)
													</li>
													<li>
														Check that the player’s
														district must exist in
														the district enums.
													</li>
													<li>
														The registrant’s age
														should only be between
														13 and 18 years old,
														inclusive.
													</li>
													<li>
														Only one male and one
														female player should
														exist per district.
													</li>
												</ul>
											</li>
											<li>
												function commence() – starts the
												game
												<ul>
													<li>
														The game should last for
														5 minutes starting from
														now (block.timestamp).
													</li>
												</ul>
											</li>
											<li>
												function check() – checks the
												progress of the game
												<ul>
													<li>
														One player should die.
														This is chosen in a
														random fashion.
													</li>
													<li>
														The random function can
														use a pseudorandom
														source (eg.
														block.timestamp) or a
														more secure way of
														generating randomness
														(eg. Provable API). You
														have the freedom to
														choose.
													</li>
													<li>
														If the game has ended
														(i.e. 5 minutes have
														passed) and there is
														still more than one
														player alive, kill the
														players randomly until
														one player is left
														alive.
													</li>
													<li>
														If only one player is
														left before the time is
														up, the game has ended,
														and that player is
														declared the winner.
													</li>
												</ul>
											</li>
											<li>
												function getWinner() – retrieves
												the name of the winner
												<ul>
													<li>
														The last player who is
														still alive is declared
														the winner and this
														function returns his/her
														name.
													</li>
													<li>
														If the game has not
														ended yet, return GAME
														IN PROGRESS.
													</li>
												</ul>
											</li>
											<li>
												Use modifiers where it is
												relevant.
											</li>
											<li>
												Add appropriate events for the
												functions.
											</li>
											<li>
												Use suitable data structures for
												the contract fields.
											</li>
										</ul>
									</i>
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
									src={hg1}
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
									src={hg2}
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
									src={hg3}
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
									src={hg4}
									alt=''
									className='img-fluid rounded-3'
								/>
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
									src={hg5}
									alt=''
									className='img-fluid rounded-3'
								/>
							</Col>
						</Row>
						<BackToTop />
					</Fragment>
				</Container>
			</div>
		</Fragment>
	);
};

export default Ethers;
