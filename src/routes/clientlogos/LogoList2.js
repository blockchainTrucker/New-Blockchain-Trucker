import { v4 as uuid } from 'uuid';

// import media files
import NodejsLogo from 'assets/images/brand/nodejs.png';
import ReactLogo from 'assets/images/brand/reactjs.png';
import MongoDBLogo from 'assets/images/brand/mongodb.png';
import ExpressLogo from 'assets/images/brand/expressjs.png';
import BootstrapLogo from 'assets/images/brand/bootstrap.png';

const LogoList2 = [
	{
		id: uuid(),
		logoimage: NodejsLogo,
		link: 'https://nodejs.org/',
		alt: 'Node.js',
	},
	{
		id: uuid(),
		logoimage: ReactLogo,
		link: 'https://reactjs.org/',
		alt: 'React.js',
	},
	{
		id: uuid(),
		logoimage: MongoDBLogo,
		link: 'https://www.mongodb.com',
		alt: 'MongoDB',
	},
	{
		id: uuid(),
		logoimage: ExpressLogo,
		link: 'https://expressjs.com/',
		alt: 'Express',
	},
	{
		id: uuid(),
		logoimage: BootstrapLogo,
		link: 'https://getbootstrap.com/',
		alt: 'Bootstrap',
	},
];

export default LogoList2;
