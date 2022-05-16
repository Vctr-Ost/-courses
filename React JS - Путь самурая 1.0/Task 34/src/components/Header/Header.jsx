import style from './Header.module.css'

function Header() {
	return (
		<header className={style.header}>
			<a href="#">
             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Stencyl_logotype.svg/2560px-Stencyl_logotype.svg.png' alt='logo image' />
			</a>
		</header>
	);
}

export default Header;