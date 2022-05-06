import { v4 as uuid } from 'uuid';

const NavbarDefault = [
	{
		id: uuid(),
		menuitem: 'Portfolio',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'All Projects',
				link: '/projects',
			},
			// {
			// 	id: uuid(),
			// 	menuitem: 'Funding Chain',
			// 	link: '/projects/funding-chain',
			// },

			// {
			// 	id: uuid(),
			// 	menuitem: 'Blockchain Trucker',
			// 	link: '/projects/blockchain-trucker',
			// },
		],
	},
	{
		id: uuid(),
		menuitem: 'Contact Us',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'Contact Us',
				link: '/contact-us',
			},
		],
	},
];

export default NavbarDefault;
