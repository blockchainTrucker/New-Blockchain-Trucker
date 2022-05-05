const NavbarDefault = [
	{
		id: uuid(),
		menuitem: 'Chains',
		link: '#',
		children: [
			{
				id: uuid(),
				header: true,
				header_text: 'Chains',
			},
			{
				id: uuid(),
				menuitem: 'Create a Chain',
				link: '/dashboard/create-chain',
			},
			{
				id: uuid(),
				header: true,
			},
			{
				id: uuid(),
				header: true,
				header_text: 'Find a Chain',
			},
			{
				id: uuid(),
				menuitem: 'All',
				link: '/chains',
			},
			{
				id: uuid(),
				menuitem: 'Medical',
				link: '/chains',
			},
			{
				id: uuid(),
				menuitem: 'Teams',
				link: '/chains',
			},
			{
				id: uuid(),
				menuitem: 'Schools',
				link: '/chains',
			},
			{
				id: uuid(),
				menuitem: 'Business',
				link: '/chains',
			},
		],
	},
	{
		id: uuid(),
		menuitem: 'My Account',
		link: '#',
		children: [
			{
				id: uuid(),
				header: true,
				header_text: 'My Account',
			},
			{
				id: uuid(),
				menuitem: 'Dashboard',
				// link: `/dashboard/${user.id}`,
			},
			{
				id: uuid(),
				menuitem: 'My Chains',
				link: '/dashboard/my-chains',
			},
			{
				id: uuid(),
				menuitem: 'My Chainlinks',
				link: 'dashboard/my-chainlinks',
			},
			{
				id: uuid(),
				menuitem: 'Payouts',
				link: 'dashboard/payouts',
			},
		],
	},
	{
		id: uuid(),
		menuitem: 'Help',
		children: [
			{
				id: uuid(),
				header: true,
				header_text: 'Help',
			},
			{
				id: uuid(),
				menuitem: 'FAQ',
				link: '/frequently-asked-questions',
			},
			{
				id: uuid(),
				menuitem: 'Tutorials',
				link: '/tutorials',
			},
			{
				id: uuid(),
				menuitem: 'Contact Us',
				link: '/contact-us',
			},
		],
	},
];

export default NavbarDefault;
