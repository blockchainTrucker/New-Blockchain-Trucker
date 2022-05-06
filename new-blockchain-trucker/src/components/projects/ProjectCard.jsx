// import node module libraries
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Image,
	Card,
	Row,
	Col,
	ProgressBar,
	ListGroup,
	Badge,
} from 'react-bootstrap';

const ProjectCard = ({ item, extraclass }) => {
	/** Used in Course Index, Course Category, Course Filter Page, Student Dashboard etc...  */
	const GridView = () => {
		return (
			<Card
				href={item.address}
				className={`mb-4 card-hover ${extraclass}`}>
				{/* <a href={item.address}> */}
				<Image
					src={item.image}
					alt=''
					className='card-img-top rounded-top-md'
				/>
				{/* </a> */}
				{/* Card body  */}
				{/* <Card.Body>
					<h3 className='h4 mb-2 text-truncate-line-2 '>
						<Link to='#' className='text-inherit'>
							{item.title}
						</Link>
					</h3>
					<ListGroup as='ul' bsPrefix='list-inline' className='mb-3'>
						<ListGroup.Item as='li' bsPrefix='list-inline-item'>
							<i className='far fa-clock me-1'></i>
							{item.duration}
						</ListGroup.Item>
						<ListGroup.Item as='li' bsPrefix='list-inline-item'>
							<LevelIcon level={item.level} />
							{item.level}
						</ListGroup.Item>
					</ListGroup>
				</Card.Body> */}
				{/* Card Footer */}
			</Card>
		);
	};

	return (
		<Fragment>
			<GridView />
		</Fragment>
	);
};

export default ProjectCard;
