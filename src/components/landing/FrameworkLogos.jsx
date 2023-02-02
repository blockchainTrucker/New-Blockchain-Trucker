import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const LogosTopHeadingInverseDark = ({ logos, title, limit }) => {
	const LogoImage = ({ logo, link, alt }) => {
		return (
			<Col>
				<div>
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
		<Row className='mt-5'>
			<Col xl={12} lg={12} md={12} s={12} xs={12}>
				<div className='text-center mb-3 px-md-8'>
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
