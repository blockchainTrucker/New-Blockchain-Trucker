// import media files
import pizzaKing from 'assets/images/pizza-king/pizza-king-home-top.png';
import fundingChain from 'assets/images/portfolio/logos/funding-chain.png';
import decentralizedVentures from 'assets/images/portfolio/logos/decentralized-ventures.png';
import videoTutorials from 'assets/images/video-tutorials/video-tutorials-home-loggedin.png';
import cookUni from 'assets/images/cookuni/cookuni-home.png';
import bcrypt from 'assets/images/bcrypt/bcrypt1.png';
import ethers from 'assets/images/ethers/welcome.jpg';

const blogContent = `<p><h4>Design Systems for Developers Geeks a modern, clean and accessibility oriented design system for developing fast and powerful web interfaces.</h4>
<br>Condimentum leo utipsum euismod feugiatn elntum sapiennonser variusmi elementum necunc elementum velitnon tortor convallis variusa placerat nequhse. 
Mauris varius ullamcorper tincidsellus egestas innisivel sollicituullam feugiate facilisis ones Suspendisse blandit sedtincinean.<br>
Mauris varius ullamcorper tincidsellus egestas innisivel sollicituullam feugiate facilisis ones velleo finibus maximus nequsese sedmattis auspendisse<u>
duimetus ullamcorper faucibuse blandit</u>sedtincinean.</p></div><br><hr><br><blockquote style="text-align: center;">
<h2 style="color: rgb(117, 79, 254);">"Failure will never overtake me if my determination to succeed is strong enough."</h2><footer>
<cite title="Source Title">Og Mandino</cite></footer></blockquote><br><hr><br><div><p>Condimentum leo utipsum euismod feugiatn elntum 
<strong>sapiennonser variusmi elementum </strong>necunc elem entum velitnon tortor convallis variusa placerat nequhse. Quis eu Lorem irure magna. 
Ex labore reprehenderit veniam irure id nostrud velit. Minim aliquip cillum laborum qui Lorem eu.</p>
<p>Sint officia nulla deserunt voluptate non amet consequat ipsum tempor. Nulla id cupidatat ipsum occaecat. Aute ad et fugiat velit sunt qui veniam labore elit ipsum commodo proident. 
Sit tempor consectetur commodo laborum mollit. Enim sint nostrud nisi in ad aliqua laboris ad non.</p></div><div><h3>Unordered Lists (Nested)</h3><br><ul><li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li><li>Integer molestie lorem at massa</li><li>Facilisis in pretium nisl aliquet</li><li>Nulla volutpat aliquam velit<ul><li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li><li>Vestibulum laoreet porttitor sem</li><li>Ac tristique libero volutpat at</li></ul></li><li>Faucibus porta lacus fringilla vel</li><li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li></ul></div><div><h3>Ordered List (Nested)</h3><ol><li>Lorem ipsum dolor sit amet</li><li>Consectetur adipiscing elit</li><li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li><li>Nulla volutpat aliquam velit<ol><li>Phasellus iaculis neque</li><li>Purus sodales ultricies</li><li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li></ol></li><li>Faucibus porta lacus fringilla vel</li><li>Aenean sit amet erat nunc</li><li>Eget porttitor lorem</li></ol></div><div><h2>Image </h2>
<p>Sint officia nulla deserunt voluptate non amet consequat ipsum tempor. Nulla id cupidatat ipsum occaecat. Aute ad et fugiat velit sunt qui veniam labore elit ipsum commodo proident. 
Sit tempor consectetur commodo laborum mollit. Enim sint nostrud nisi in ad aliqua laboris ad non.</p>
<img src="https://codescandy.com/geeks-bootstrap-5/assets/images/blog/center-img.jpg" alt=""  style="width:100%">`;

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
		image: bcrypt,
		category: 'Example',
		title: 'Hashing Example',
		details:
			'An example of using Bcrypt to hash a password and then compare it in an API.',
		link: '/portfolio/hashing',
	},
	{
		id: 7,
		image: ethers,
		category: 'Example',
		title: 'Etherium Wallet Using Ethers.js',
		details:
			'A single page application where you can create, recover, and use an Etherium wallet.',
		link: '/portfolio/ethers',
	},
];

export default portfolioData;
