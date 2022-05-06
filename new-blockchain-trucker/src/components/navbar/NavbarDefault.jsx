// import node module libraries
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Image,
	Navbar,
	Nav,
	Container,
	Dropdown,
} from 'react-bootstrap';
import Icon from '@mdi/react';

import { useMediaQuery } from 'react-responsive';

import Logo from 'assets/images/brand/logo-nobackground-200.png';
import { mdiFacebook, mdiInstagram, mdiLinkedin } from '@mdi/js';

// import data files
import NavbarDefaultRoutes from 'routes/NavbarDefault';
import NavDropdownMain from 'components/navbar/NavDropdownMain';

const NavbarDefault = ({ headerstyle, login }) => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1224px)',
	});
	const isLaptop = useMediaQuery({
		query: '(min-width: 1024px)',
	});

	const [expandedMenu, setExpandedMenu] = useState(false);

	const QuickMenu = () => {
		return (
			<Fragment>
				<Dropdown
					as={Nav.Item}
					className={`${
						isDesktop || isLaptop ? 'mt-2 me-0' : 'mt-2 me-2'
					}`}></Dropdown>
			</Fragment>
		);
	};
	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand='lg'
				className={`${login ? 'bg-white' : ''} navbar p-4 ${
					headerstyle === 'dark'
						? 'navbar-dark bg-dark'
						: 'navbar-default py-1'
				}`}>
				<Container fluid className='px-0 ps-0'>
					<Navbar.Brand as={Link} to='/'>
						<Image src={Logo} alt='' />
					</Navbar.Brand>
					<div
						className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${
							login
								? isDesktop || isLaptop
									? 'd-none'
									: 'd-flex'
								: 'd-none'
						}`}>
						<QuickMenu />
					</div>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='icon-bar top-bar mt-0'></span>
						<span className='icon-bar middle-bar'></span>
						<span className='icon-bar bottom-bar'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav navbar-middle'>
						<Nav>
							{NavbarDefaultRoutes.map((item, index) => {
								if (item.children === undefined) {
									return (
										<Nav.Link
											key={index}
											as={Link}
											to={item.link}>
											{item.menuitem}
										</Nav.Link>
									);
								} else {
									return (
										<NavDropdownMain
											item={item}
											key={index}
											onClick={(value) =>
												setExpandedMenu(value)
											}
										/>
									);
								}
							})}
						</Nav>
						<Nav className='navbar-nav navbar-right-wrap ms-auto d-flex'>
							<Row>
								{' '}
								<Col
									md={6}
									xl={4}
									lg={4}
									xs={4}
									className='d-flex align-items-center'>
									<a
										href='https://www.facebook.com/DecentralizedVenturesLLC'
										target='_blank'
										className='text-muted text-primary-hover me-3  '>
										<Icon path={mdiFacebook} size={1.5} />
									</a>
									<a
										href='https://www.instagram.com/decentralizedventures/'
										target='_blank'
										className='text-muted text-primary-hover me-3  '>
										<Icon path={mdiInstagram} size={1.5} />
									</a>
									<a
										href='https://www.linkedin.com/company/decentralized-ventures'
										target='_blank'
										className='text-muted text-primary-hover me-3'>
										<Icon path={mdiLinkedin} size={1.5} />
									</a>
								</Col>
							</Row>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

// Specifies the default values for props
NavbarDefault.defaultProps = {
	headerstyle: 'navbar-default',
	login: false,
};

// Typechecking With PropTypes
NavbarDefault.propTypes = {
	headerstyle: PropTypes.string,
	login: PropTypes.bool,
};

export default NavbarDefault;
