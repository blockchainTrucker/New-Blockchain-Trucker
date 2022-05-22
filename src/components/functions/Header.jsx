import { Col, Row } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

const Header = ({ title, github }) => {
	return (
		<Row className='justify-content-center pb-10 '>
			<Col xl={12} lg={12} md={12} sm={12}>
				<div className='text-center'>
					<h1 className='display-4 fw-bold'>{title}</h1>
				</div>
				<div className='text-center'>
					<a href={github} target='_blank'>
						<Icon path={mdiGithub} size={1} />{' '}
						<span>
							<u>Click here to view the repository</u>
						</span>
					</a>
				</div>
			</Col>
		</Row>
	);
};

export default Header;
