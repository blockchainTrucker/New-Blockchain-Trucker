// import node module libraries
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './layouts/ScrollToTop';
import NavbarDefault from './components/navbar/NavbarDefault';
import Footer from './components/footers/FooterCenter';
import AllRoutes from './routes/AllRoutes';

function App() {
	return (
		<Router>
			<div className='App'>
				<ScrollToTop />
				<NavbarDefault />
				<AllRoutes />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
