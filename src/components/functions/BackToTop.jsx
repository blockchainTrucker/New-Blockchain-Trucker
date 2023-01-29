import Icon from '@mdi/react';
import { mdiArrowUpBoldCircle } from '@mdi/js';
import { Col, Row, Container } from 'react-bootstrap';

export default function BackToTop() {
	return (
		<Container>
			<Row className='text-center text-primary'>
				<Col xl={12} lg={12} md={12} sm={12} xs={12}>
					<Icon
						className='pointer'
						path={mdiArrowUpBoldCircle}
						size={2}
						onClick={() => {
							window.scrollTo(0, 0);
						}}
					/>
				</Col>
			</Row>
			<Row className='text-center'>
				<Col xl={12} lg={12} md={12} sm={12} xs={12}>
					<span>Back to Top</span>
				</Col>
			</Row>
		</Container>
	);
}
