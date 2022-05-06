// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Nav, Tab, Container } from 'react-bootstrap';

// import custom components
import PageHeadingBriefinfo from 'components/projects/PageHeadingBriefinfo';

// import sub components
import CourseCard from './ProjectCard';

// import data files
import { ProjectData } from 'components/projects/AllProjectData';

const CourseCategory = () => {
	return (
		<Fragment>
			{/* Page header */}
			<PageHeadingBriefinfo
				className='mt-5'
				pagetitle='Portfolio'
				briefinfo='Our current Web 3.0 projects.'
			/>

			<div className='py-6'>
				<Container>
					<Row className='justify-content-center'>
						{ProjectData.filter(function (datasource) {
							return datasource.id <= 8;
						}).map((item, index) => (
							<Col lg={3} md={6} sm={12} key={index}>
								<a target='_blank' href={item.address}>
									<CourseCard item={item} />
								</a>
							</Col>
						))}
					</Row>
					{/* end of all javaScript courses */}
				</Container>
			</div>
		</Fragment>
	);
};

export default CourseCategory;
