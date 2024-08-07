import { Link } from 'react-router-dom';
import './Header.scss';
import { useNav } from './hooks/useNav';

export const Header = () => {
	const { isActive, handleNav } = useNav();

	return (
		<header className='Header'>
			<Logo />
			<Nav />
			<Hamburger handleNav={handleNav} />
			{isActive && <NavMobile />}
		</header>
	);
};

export const Logo = () => {
	return (
		<Link to={'/'} className='Header-logo'>
			Summit.
		</Link>
	);
};

export const Nav = () => {
	return (
		<ul className='Header-nav'>
			<li className='Header-sign'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					viewBox='0 0 16 16'
					className='Header-svg'
				>
					<path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
					<path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1' />
				</svg>{' '}
				<Link className='Header-link-sign' to={'/login'}>
					Ingresar
				</Link>
			</li>
			<li className='Header-li'>
				<Link className='Header-register-link' to={'/registrarse'}>
					Registrarse
				</Link>
			</li>
		</ul>
	);
};

export const Hamburger = ({ handleNav }) => {
	return (
		<button className='Header-hamburger' onClick={handleNav}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				fill='currentColor'
				className='Header-hamburger-icon'
				viewBox='0 0 16 16'
			>
				<path d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
			</svg>
		</button>
	);
};

export const NavMobile = () => {
	// return <div></div>;
};
