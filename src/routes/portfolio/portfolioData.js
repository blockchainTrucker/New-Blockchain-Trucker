// import media files
import pizzaKing from 'assets/images/pizza-king/pizza-king-home-top.png';
import fundingChain from 'assets/images/portfolio/logos/funding-chain.png';
import decentralizedVentures from 'assets/images/portfolio/logos/decentralized-ventures.png';
import videoTutorials from 'assets/images/video-tutorials/video-tutorials-home-loggedin.png';
import cookUni from 'assets/images/cookuni/cookuni-home.png';
import bcrypt from 'assets/images/bcrypt/bcrypt1.png';
import ethers from 'assets/images/ethers/welcome.jpg';
import hgames from 'assets/images/hunger-games/hunger-games.jpg';

const portfolioData = [
	{
		id: 1,
		image: fundingChain,
		category: 'Personal Project',
		title: 'Funding Chain',
		details:
			'A crowd funding platform that uses smart contracts currently in development.',
		link: '/portfolio/funding-chain',
	},
	{
		id: 2,
		image: decentralizedVentures,
		category: 'Personal Project',
		title: 'Decentralized Ventures',
		details: `My company's main customer facing website made using React. `,
		link: '/portfolio/decentralized-ventures',
	},
	{
		id: 3,
		image: pizzaKing,
		backgroundColor: '#00000',
		category: 'School Project',
		title: 'Pizza King',
		details:
			'The final project for my Full Stack Developer certification made using the MERN stack.',
		link: '/portfolio/pizza-king',
	},
	{
		id: 4,
		image: videoTutorials,
		category: 'School Project',
		title: 'Video Tutorials',
		details:
			'Module 5 backend project at Kingsland University using Express and Handlebars.',
		link: '/portfolio/video-tutorials',
	},
	{
		id: 5,
		image: cookUni,
		category: 'School Project',
		title: 'CookUni',
		details:
			'Module 4 frontend project at Kingsland University using Sammy and Handlebars.',
		link: '/portfolio/cookuni',
	},
	{
		id: 6,
		image: hgames,
		category: 'Example',
		title: 'Hunger Games Solidity Example',
		details:
			'An example of a timed game that selects a random winner using Solidity.',
		link: '/portfolio/hunger-games',
	},
	{
		id: 7,
		image: bcrypt,
		category: 'Example',
		title: 'Hashing Example',
		details:
			'An example of using Bcrypt to hash a password and then compare it in an API.',
		link: '/portfolio/hashing',
	},
	{
		id: 8,
		image: ethers,
		category: 'Example',
		title: 'Etherium Wallet Using Ethers.js',
		details:
			'A single page application where you can create, recover, and use an Etherium wallet.',
		link: '/portfolio/ethers',
	},
];

export default portfolioData;
