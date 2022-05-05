import { v4 as uuid } from 'uuid';

// import media files
import PaypalBrandLogo from 'assets/images/brand/paypal.svg';
import NetflixBrandLogo from 'assets/images/brand/netflix.svg';
import XboxBrandLogo from 'assets/images/brand/xbox.svg';
import InstagramBrandLogo from 'assets/images/brand/instagram.svg';
import ReactLogo from 'assets/images/brand/reactjs.png';
import NodejsLogo from 'assets/images/brand/nodejs.svg';

const LogoList1 = [
	{
		id: uuid(),
		logoimage: PaypalBrandLogo,
	},
	{
		id: uuid(),
		logoimage: NetflixBrandLogo,
	},
	{
		id: uuid(),
		logoimage: XboxBrandLogo,
	},
	{
		id: uuid(),
		logoimage: InstagramBrandLogo,
	},
	{
		id: uuid(),
		logoimage: ReactLogo,
	},
	{
		id: uuid(),
		logoimage: NodejsLogo,
	},
];

export default LogoList1;
