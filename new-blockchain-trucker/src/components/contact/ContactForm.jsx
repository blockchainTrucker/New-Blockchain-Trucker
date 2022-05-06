import { Col, Row, Form, Button, Image, Container } from 'react-bootstrap';
import { FormSelect } from 'components/contact/FormSelect';
import loading from 'assets/images/loading/loading.gif';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

const ContactForm = () => {
	const contactReason = [
		{ value: 'Consultation', label: 'Consultation' },
		{ value: 'Development', label: 'Development' },
		{ value: 'Other', label: 'Other' },
	];
	let [captchaError, setCaptchaError] = useState();
	let robotCheck = false;
	function reCaptcha(value) {
		if (value !== undefined) {
			robotCheck = true;
		}
	}

	function sendForm(
		firstName,
		lastName,
		email,
		phoneNumber,
		contactReason,
		message
	) {
		const url =
			'https://blockchain-trucker-api.herokuapp.com/decentralized-ventures-contact-form';
		// 'http://localhost:5000/decentralized-ventures-contact-form';

		let data = JSON.stringify({
			firstName: firstName,
			lastName: lastName,
			email: email,
			phoneNumber: phoneNumber,
			contactReason: contactReason,
			message: message,
		});
		let resources = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: data,
		};
		return fetch(url, resources).then((res) => res);
	}

	function submitHandler(event) {
		event.preventDefault();
		let firstName = formFirstName.value;
		let lastName = formLastName.value;
		let email = formEmail.value;
		let phoneNumber = formPhoneNumber.value;
		let contactReason = formContactReason.value;
		let message = formMessage.value;
		if (robotCheck) {
			document.getElementById('loading').classList = 'loading show';
			sendForm(
				firstName,
				lastName,
				email,
				phoneNumber,
				contactReason,
				message
			)
				.then((res) => {
					if (res.status === 201) {
						document.getElementById('form').classList = 'hide';
						document.getElementById('loading').classList =
							'loading hide';
						document.getElementById('messages').classList = 'show';
					} else if (res.status === 409) {
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			setCaptchaError('Please complete reCAPTCHA before submitting.');
		}
	}

	return (
		<div>
			<div className='px-4 px-xl-10 py-8 py-lg-0'>
				{/* form section */}
				<div id='form'>
					<Container>
						<Form onSubmit={submitHandler}>
							<Row>
								{/* First Name */}
								<Col md={6} sm={12}>
									<Form.Group
										className='mb-3'
										controlId='formFirstName'>
										<Form.Label>
											First Name:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											type='text'
											placeholder='First Name'
											required
										/>
									</Form.Group>
								</Col>

								{/* Last Name */}
								<Col md={6} sm={12}>
									<Form.Group
										className='mb-3'
										controlId='formLastName'>
										<Form.Label>
											Last Name:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											type='text'
											placeholder='Last Name'
											required
										/>
									</Form.Group>
								</Col>

								{/* Email */}
								<Col md={6} sm={12}>
									<Form.Group
										className='mb-3'
										controlId='formEmail'>
										<Form.Label>
											Email:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											type='email'
											placeholder='Email'
											required
										/>
									</Form.Group>
								</Col>

								{/* Phone Number */}
								<Col md={6} sm={12}>
									<Form.Group
										className='mb-3'
										controlId='formPhoneNumber'>
										<Form.Label>
											Phone Number:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											type='number'
											placeholder='Phone'
											required
										/>
									</Form.Group>
								</Col>

								{/* Contact Reason */}
								<Col md={12} sm={12}>
									<Form.Group
										className='mb-3'
										controlId='formContactReason'>
										<Form.Label>
											Contact Reason:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											as={FormSelect}
											placeholder='Select'
											options={contactReason}
											required
										/>
									</Form.Group>
								</Col>

								{/* Messages */}
								<Col md={12} sm={12}>
									<Form.Group
										className='mb-3'
										controlId='formMessage'>
										<Form.Label>
											Message:
											<span className='text-danger'>
												*
											</span>
										</Form.Label>
										<Form.Control
											as='textarea'
											placeholder='Messages'
											rows={3}
											required
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className='mb-3'>
										<p className='text-danger'>
											{captchaError}
										</p>
										<ReCAPTCHA
											sitekey='6LcuWeceAAAAAPcVZ7Kyesu6DmN5ASlWrsLSqFh9'
											onChange={reCaptcha}
											size='compact'
										/>
									</Form.Group>
								</Col>

								{/* button */}
								<Col md={12} sm={12}>
									<Button variant='primary' type='submit'>
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
				<Row className='align-items-center mx-auto lg-min-vh-100'>
					<Col
						md={{ span: 12, offset: 5 }}
						sm={{ span: 12, offset: 5 }}>
						<div>
							<h2 className='display-5 fw-bold text-primary'>
								Thank you!
							</h2>
							<p className='lead justify text-dark'>
								We will be in touch soon.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default ContactForm;
