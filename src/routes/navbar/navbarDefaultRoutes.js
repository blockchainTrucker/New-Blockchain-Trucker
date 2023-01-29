import { v4 as uuid } from 'uuid';

const NavbarDefaultRoutes = [
	{
		id: uuid(),
		menuitem: 'Portfolio',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'All',
				link: '/portfolio',
			},
			{
				id: uuid(),
				menuitem: 'Projects',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: 'Funding Chain',
						link: '/portfolio/funding-chain',
					},
					{
						id: uuid(),
						menuitem: 'Decentralized Ventures',
						link: '/portfolio/decentralized-ventures',
					},
					{
						id: uuid(),
						menuitem: 'Pizza King',
						link: '/portfolio/pizza-king',
					},
					{
						id: uuid(),
						menuitem: 'Video Tutorials',
						link: '/portfolio/video-tutorials',
					},
					{
						id: uuid(),
						menuitem: 'CookUni',
						link: '/portfolio/cookuni',
					},
				],
			},

			{
				id: uuid(),
				menuitem: 'Examples',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: ' Hunger Games',
						link: '/portfolio/hunger-games',
					},
					{
						id: uuid(),
						menuitem: ' Password Hashing',
						link: '/portfolio/hashing',
					},
					{
						id: uuid(),
						menuitem: 'Etherium Wallet',
						link: '/portfolio/ethereum-wallet',
					},
				],
			},
		],
	},
	{
		id: uuid(),
		menuitem: 'About Me',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'About Me',
				link: `/about-me`,
			},
		],
	},
	{
		id: uuid(),
		menuitem: 'Contact Me',
		children: [
			{
				id: uuid(),
				menuitem: 'Contact Me',
				link: '/contact-me',
			},
		],
	},
];

export default NavbarDefaultRoutes;
