import React from "react";
import logo from "../../images/icons/logo.png";
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";
import "./header.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<div className="nav-wrapper fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target=".navbar-collapse">
							☰
						</button>
						<Link  className="navbar-brand mx-auto" to="/">
							<img className="mylog" src={logo} />
						</Link>
						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
								<Nav link="mac" url="/Macbook" />
								<Nav link="iphone" url="/Iphone11" />
								<Nav link="ipad" url="/Ipodpro" />
								<Nav link="	watch" url="/Tv" />
								<Nav link="tv" url="/Tv" />
								<Nav link="Music" url="/Youtube" />
								<Nav link="	Support" url="/Arcade" />
								<Nav
									link=""
									url="/search"
									image={<img className="mylog" src={search} />}
								/>
								<Nav
									link=""
									url="/bag"
									image={<img className="mylog" src={cart} />}
								/>
								{/* <li className="nav-item">
									<a className="nav-link js-scroll-trigger" href="/mac/">
										Mac to see the differcence 
									</a>
								</li> */}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
