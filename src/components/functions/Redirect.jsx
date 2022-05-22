import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Redirect = ({ to }) => {
	const navigate = useNavigate();
	useEffect(() => {
		window.open(`${to}`, '_blank');
	}, []);
	useEffect(() => {
		navigate('/portfolio');
	}, []);
	return (
		<div>
			<p>redirecting...</p>
		</div>
	);
};

export default Redirect;
