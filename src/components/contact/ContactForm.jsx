import { Col, Row, Form, Button, Image, Container } from 'react-bootstrap';
import { FormSelect } from 'components/contact/FormSelect';
import loading from 'assets/images/loading/loading.gif';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [details, setDetails] = useState('');
	const [error, setError] = useState();
	let robotCheck = false;

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Blockchain Trucker - Contact Me';
	}, []);

	function reCaptcha(value) {
		if (value !== undefined) {
			robotCheck = true;
		}
	}

	function sendForm(name, company, email, details) {
		const url = 'https://blockchain-trucker-api.herokuapp.com/contact-form';
		let data = JSON.stringify({
			name: name,
			company: company,
			email: email,
			details: details,
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
		let detailsRegex = new RegExp(/[\W\w]{20}/);
		let nameRegex = new RegExp(/[a-zA-Z]{2}/);
		let emailRegex = new RegExp(
			/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
		);

		if (!nameRegex.test(name)) {
			setError('Enter Your Name');
			return;
		} else if (!nameRegex.test(company)) {
			setError('Enter Company Name');
			return;
		} else if (!emailRegex.test(email)) {
			setError('Enter Valid Email');
			return;
		} else if (!detailsRegex.test(details)) {
			setError('Details Must Be At Least 20 Characters');
			return;
		} else if (robotCheck === false) {
			setError('Captcha verification failed');
			return;
		}
		document.getElementsByClassName('loading')[0].style.display = 'block';
		sendForm(name, company, email, details)
			.then((res) => {
				if (res === 'sent') {
					navigate('/message-sent');
				} else {
					setError('Something went wrong, please try again.');
				}
			})
			.catch((err) => {
				setError('Something went wrong, please try again.');
				document.getElementsByClassName('loading')[0].style.display =
					'none';
			});
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
								<Col md={6} sm={12} className=' mt-xl-8 mt-2'>
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
								<Col md={6} sm={12} className='mt-xl-8'>
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
										<ReCAPTCHA
											sitekey='6LcuWeceAAAAAPcVZ7Kyesu6DmN5ASlWrsLSqFh9'
											onChange={reCaptcha}
											size='compact'
										/>
									</Form.Group>
								</Col>

								{/* button */}
								<Col md={12} sm={12}>
									<Button
										variant='primary'
										type='submit'
										className='mb-xl-8 mb-2'>
										Submit
									</Button>
								</Col>
							</Row>
						</Form>
						{/* <Image
							src={loading}
							id='loading'
							className='loading hide'
						/> */}
					</Container>
				</div>
			</div>
			{/* <Container id='messages' className='hide'>
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
			</Container> */}
		</div>
	);
};
export default ContactForm;
