import { Col, Row, Form, Button, Image, Container } from 'react-bootstrap';
import { FormSelect } from 'components/contact/FormSelect';
import loading from 'assets/images/loading/loading.gif';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

const ContactForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [message, setMessage] = useState('');
	const [firstNameError, setFirstNameError] = useState();
	const [lastNameError, setLastNameError] = useState();
	const [phoneError, setPhoneError] = useState();
	const [emailError, setEmailError] = useState();
	const [messageError, setMessageError] = useState();
	const [responseError, setResponseError] = useState('');
	const [captchaError, setCaptchaError] = useState('');

	let firstGood = false;
	let lastGood = false;
	let phoneGood = false;
	let emailGood = false;
	let messageGood = false;
	let robotCheck = false;

	useEffect(() => {
		document.title = 'Blockchain Trucker - Contact Me';
	}, []);

	function reCaptcha(value) {
		if (value !== undefined) {
			robotCheck = true;
		}
	}

	function sendForm(firstName, lastName, email, phoneNumber, message) {
		const url = 'https://blockchain-trucker-api.herokuapp.com/contact-form';
		let data = JSON.stringify({
			firstName,
			lastName,
			email,
			phoneNumber,
			message,
		});
		let resources = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: data,
		};
		return fetch(url, resources).then((res) => res.json());
	}

	function submitHandler(event) {
		event.preventDefault();
		let messageRegex = new RegExp(/[\W\w]{20}/);
		let nameRegex = new RegExp(/[a-zA-Z]{2}/);
		let phoneRegex = new RegExp(
			/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
		);
		if (nameRegex.test(firstName)) {
			firstGood = true;
			setFirstNameError('');
			document.getElementById('firstName').className = 'clearError';
		} else {
			firstGood = false;
			setFirstNameError('Enter first name');
			document.getElementById('firstName').className = 'error';
		}
		if (nameRegex.test(lastName)) {
			lastGood = true;
			setFirstNameError('');
			document.getElementById('lastName').className = 'clearError';
		} else {
			lastGood = false;
			setFirstNameError('Enter last name');
			document.getElementById('lastName').className = 'error';
		}
		if (phoneRegex.test(phoneNumber)) {
			phoneGood = true;
			setPhoneError('');
			document.getElementById('phone').className = 'clearError';
		} else {
			phoneGood = false;
			setPhoneError('Enter your phone number');
			document.getElementById('phone').className = 'error';
		}
		if (validator.isEmail(email)) {
			emailGood = true;
			setEmailError('');
			document.getElementById('email').className = 'clearError';
		} else {
			emailGood = false;
			setEmailError('Enter a valid email address');
			document.getElementById('email').className = 'error';
		}
		if (messageRegex.test(message)) {
			messageGood = true;
			setMessageError('');
			document.getElementById('message').className = 'clearError';
		} else {
			messageGood = false;
			setMessageError('Message must be at least 20 characters');
			document.getElementById('message').className = 'error';
		}
		if (!robotCheck) {
			setCaptchaError('Captcha verification failed');
		}
		if (
			!firstGood ||
			!lastGood ||
			!phoneGood ||
			!emailGood ||
			!messageGood ||
			!robotCheck
		) {
			return;
		} else {
			document.getElementsByClassName('loading')[0].style.display =
				'block';
			sendForm(firstName, lastName, email, phoneNumber, message)
				.then((res) => {
					if (res === 'sent') {
						document.getElementById('form').classList = 'hide';
						document.getElementById('loading').classList =
							'loading hide';
						document.getElementById('messages').classList = 'show';
					} else {
						document.getElementById('loading').classList =
							'loading hide';
						setError('Something went wrong, please try again.');
					}
				})
				.catch((err) => {
					setError('Something went wrong, please try again.');
					document.getElementsByClassName(
						'loading'
					)[0].style.display = 'none';
				});
		}
	}

	return (
		<div>
			<div className='px-4 py-8 py-xl-0'>
				{/* form section */}
				<div id='form'>
					<Container>
						<Form noValidate onSubmit={submitHandler}>
							<div className='mb-1'>
								<span className='validationError'>
									{responseError}
								</span>
							</div>
							<Row>
								{/* First Name */}
								<Col md={6} sm={12}>
									<Form.Group className='mb-3'>
										<Form.Label>
											First Name:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											id='firstName'
											maxLength={20}
											type='text'
											placeholder='First Name'
											onChange={(e) => {
												setFirstName(
													e.target.value.trim()
												);
											}}
										/>
										<span className='validationError'>
											{firstNameError}
										</span>
									</Form.Group>
								</Col>

								{/* Last Name */}
								<Col md={6} sm={12}>
									<Form.Group className='mb-3'>
										<Form.Label>
											Last Name:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											id='lastName'
											maxLength={20}
											type='text'
											placeholder='Last Name'
											onChange={(e) => {
												setLastName(
													e.target.value.trim()
												);
											}}
										/>
										<span className='validationError'>
											{lastNameError}
										</span>
									</Form.Group>
								</Col>

								{/* Email */}
								<Col md={6} sm={12}>
									<Form.Group className='mb-3'>
										<Form.Label>
											Email:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											id='email'
											maxLength={30}
											type='email'
											placeholder='Email'
											onChange={(e) => {
												setEmail(e.target.value.trim());
											}}
										/>
										<span className='validationError'>
											{emailError}
										</span>
									</Form.Group>
								</Col>

								{/* Phone Number */}
								<Col md={6} sm={12}>
									<Form.Group className='mb-3'>
										<Form.Label>
											Phone Number:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											id='phone'
											type='number'
											maxLength={15}
											placeholder='Phone'
											onChange={(e) => {
												setPhoneNumber(
													e.target.value.trim()
												);
											}}
										/>
										<span className='validationError'>
											{phoneError}
										</span>
									</Form.Group>
								</Col>

								{/* Messages */}
								<Col md={12} sm={12}>
									<Form.Group className='mb-3'>
										<Form.Label>
											Message:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											id='message'
											as='textarea'
											maxLength={100}
											placeholder='Messages'
											rows={3}
											onChange={(e) => {
												setMessage(e.target.value);
											}}
										/>
										<span className='validationError'>
											{messageError}
										</span>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className='mb-3'>
										<ReCAPTCHA
											id='captcha'
											sitekey='6LcL9Q4eAAAAAP1M1GTYoCz_keEU6fNW8zvNWglK'
											onChange={reCaptcha}
										/>
										<span className='validationError'>
											{captchaError}
										</span>
									</Form.Group>
								</Col>

								{/* button */}
								<Col md={12} sm={12}>
									<Button
										variant='primary'
										type='submit'
										className=''>
										Submit
									</Button>
								</Col>
							</Row>
						</Form>
						<Image
							src={loading}
							id='loading'
							className='loading hide'
						/>
					</Container>
				</div>
			</div>
			<Container id='messages' className='hide'>
				<Row className='align-items-center mx-auto'>
					<Col
						md={{ span: 12, offset: 5 }}
						sm={{ span: 12, offset: 5 }}>
						<div>
							<h2 className='display-5 fw-bold text-primary'>
								Thank you!
							</h2>
							<p className='lead justify text-dark'>
								I will be in touch soon.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default ContactForm;
