// ** Import from react dom
import { Routes, Route } from 'react-router-dom';
import 'assets/scss/theme.scss';

import Redirect from 'components/portfolio/Redirect';

// Landing
import MainLanding from 'components/landing/LandingMain';

//Portfolio
import Portfolio from 'components/portfolio/Portfolio';
import PizzaKing from 'components/portfolio/PizzaKing';
import VideoTutorials from 'components/portfolio/VideoTutorials';
import CookUni from 'components/portfolio/CookUni';

//Contact
import Contact from 'components/contact/Contact';

export default function AllRoutes(login) {
	return (
		<div>
			<Routes>
				//Landing
				<Route exact path='/' element={<MainLanding />} />
				//Portfolio
				<Route exact path='/portfolio' element={<Portfolio />} />
				<Route
					exact
					path='/portfolio/funding-chain'
					element={<Redirect to='https://www.funding-chain.com' />}
				/>
				<Route
					exact
					path='/portfolio/decentralized-ventures'
					element={
						<Redirect to='https://www.decentralized-ventures.com' />
					}
				/>
				<Route
					exact
					path='/portfolio/pizza-king'
					element={<PizzaKing />}
				/>
				<Route
					exact
					path='/portfolio/video-tutorials'
					element={<VideoTutorials />}
				/>
				<Route exact path='/portfolio/cookuni' element={<CookUni />} />
				//Contact
				<Route exact path='/contact-me' element={<Contact />} />
			</Routes>
		</div>
	);
}
