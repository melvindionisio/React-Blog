import { Link } from "react-router-dom";
const Navbar = () => {
	return ( 
		<nav className="navbar">
			<h1>The Ninja Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
			</div>
		</nav>
	 );
}
// Dont use anchor tag in react router, use Link component instead
 
export default Navbar;