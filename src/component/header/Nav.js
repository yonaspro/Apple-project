import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
	return (
		<>
			<li className="nav-item">
				<Link className=" js-scroll-trigger nav-link" to={props.url}>
					{props.link}
					{props.image}
				</Link>
			</li>
		</>
	);
};

export default Nav;
