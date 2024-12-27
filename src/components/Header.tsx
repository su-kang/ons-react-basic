import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div className="header">
			<h1>ONS React 기초 과정</h1>
			<div>
				<nav>
					<Link className="link" to="/">
						Home
					</Link>
					<Link className="link" to="/componentEx">
						ComponentEx
					</Link>
					<Link className="link" to="/reactHook">
						ReactHook
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
