/******************************************************
Component : Logo with Top Heading and Inverse Dark Logo
*******************************************************

Availalble Parameters

logos        : Required, list of the logos in JSON format
title        : Optional, title to show logo section title
limit        : Optional, default -1 i.e. show all logo, if you want to limit N number of logos you can specific with thisparameter

*/

// import node module libraries
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const LogosTopHeadingInverseDark = ({ logos, title, limit }) => {
	const LogoImage = ({ logo, link, alt }) => {
		return (
			<Col>
				<div className='mb-4'>
					<a href={link} target='_blank'>
						<Image src={logo} alt={alt} />
					</a>
				</div>
			</Col>
		);
	};

	const LogosList = () => {
		if (limit > 0) {
			return logos
				.slice(0, limit)
				.map((logo, index) => (
					<LogoImage
						key={index}
						logo={logo.logoimage}
						link={logo.link}
						alt={logo.alt}
					/>
				));
		} else {
			return logos.map((logo, index) => (
				<LogoImage key={index} logo={logo.logoimage} />
			));
		}
	};

	return (
		<Row className='mt-10'>
			<Col xl={12} md={12} xs={12}>
				<div className='text-center mb-6 px-md-8'>
					<span className='ls-md fs-5 text-primary fw-bold'>
						{title}
					</span>
				</div>
				<Row className='text-center'>
					<LogosList />
				</Row>
			</Col>
		</Row>
	);
};

LogosTopHeadingInverseDark.propTypes = {
	logos: PropTypes.array,
	title: PropTypes.string,
	limit: PropTypes.number,
};

LogosTopHeadingInverseDark.defaultProps = {
	limit: -1,
};

export default LogosTopHeadingInverseDark;
