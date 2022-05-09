// import node module libraries
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ item }) => {
	const CategoryColors = (category) => {
		switch (category) {
			case 'School Project':
				return 'kingsland';
			case 'Personal Project':
				return 'primary';
			case 'Example':
				return 'secondary';
			default:
				return 'primary';
		}
	};

	return (
		<Card className='mb-4 shadow-lg'>
			<Link to={`${item.link}`}>
				<Card.Img
					variant='top'
					src={item.image}
					className='rounded-top-md img-fluid'
				/>
			</Link>
			{/* Card body  */}
			<Card.Body>
				<Link
					to={`${item.link}`}
					className={`fs-5 fw-semi-bold d-block mb-3 text-${CategoryColors(
						item.category
					)}`}>
					{item.category}
				</Link>
				<h3>
					<Link to={`${item.link}`} className='text-inherit'>
						{item.title}
					</Link>
				</h3>
				<p> {item.details} </p>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
