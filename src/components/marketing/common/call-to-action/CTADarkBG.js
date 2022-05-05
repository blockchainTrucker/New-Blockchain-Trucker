// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

const CTADarkBG = ({ title, subtitle, description, btntext, btnlink }) => {
	return (
		<div className="py-14 bg-dark">
			<Container>
				<Row>
					<Col className="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
						<span className="fs-4 text-warning ls-md text-uppercase fw-semi-bold">
							{subtitle}
						</span>
						{/* heading  */}
						<h2 className="display-3 mt-4 mb-3 text-white fw-bold">{title}</h2>
						{/* para  */}
						<p className="lead text-white-50 px-lg- 8 mb-6">{description}.</p>
						<Link to={btnlink} className="btn btn-primary">
							{btntext}
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default CTADarkBG;
