// ** Import from react dom
import { Route, Routes } from 'react-router-dom';
import 'assets/scss/theme.scss';
import Main from 'components/main/Main';
import Projects from 'components/projects/Projects';
import Contact from 'components/contact/Contact';
import Error404 from 'components/specialty/Error404';

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route exact path='/projects' element={<Projects />} />
				<Route exact path='/contact-us' element={<Contact />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
