// ** Import from react dom
import { Routes, Route } from 'react-router-dom';
import 'assets/scss/theme.scss';

import Redirect from 'components/functions/Redirect';

// Landing
import MainLanding from 'components/landing/LandingMain';

//Portfolio
import Portfolio from 'components/portfolio/Portfolio.jsx';
import PizzaKing from 'components/portfolio/school-projects/PizzaKing.jsx';
import VideoTutorials from 'components/portfolio/school-projects/VideoTutorials.jsx';
import CookUni from 'components/portfolio/school-projects/CookUni.jsx';
import Hashing from 'components/portfolio/examples/Hashing.jsx';
import Ethers from 'components/portfolio/examples/EthereumWallet.jsx';
import HungerGames from 'components/portfolio/examples/HungerGames.jsx';

//Contact
import Contact from 'components/contact/Contact';

//About
import About from 'components/about/About';

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
				<Route exact path='/portfolio/hashing' element={<Hashing />} />
				<Route exact path='/portfolio/cookuni' element={<CookUni />} />
				<Route exact path='/portfolio/ethers' element={<Ethers />} />
				<Route
					exact
					path='/portfolio/hunger-games'
					element={<HungerGames />}
				/>
				//Contact
				<Route exact path='/contact-me' element={<Contact />} />
				//About
				<Route exact path='/about-me' element={<About />} />
			</Routes>
		</div>
	);
}
