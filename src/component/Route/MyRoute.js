import React from "react";
import { Routes, Route } from "react-router-dom";
import Iphone11 from "../iphone-11/iphone11";
import Iphone11Pro from "../ipone11-pro/iphone11-pro";
import Macbook from "../macbook/macbook";
import Main from "../Main/Main";
import Four04 from "../four04/Four04";
import Ipodpro from "../ipod-pro/ipodpro";
import Arcade from "../Arcade/arcade";
import Youtube from "../Youtube/Youtube";
import Tv from "../Tv/tv";
import FachIphone from "../Iphonefach/FachIphone";
const MyRoute = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/bag"
					element={<FachIphone/>}
				/>
				<Route
					path="/search"
					element={
						<div>
							<h1 className="bag text-center">This is Your search</h1>
						</div>
					}
				/>
				
                <Route path="/Iphone11" element={<Iphone11Pro />} />
                <Route path="/Ipodpro" element={<Ipodpro />} />
				<Route path="/Macbook" element={<Macbook />} />
				<Route path="/Iphone11" element={<Iphone11 />} />
				<Route path="/Tv" element={<Tv />} />
				<Route path="/Arcade" element={<Arcade />} />
				<Route path="/Youtube" element={<Youtube />} />
				<Route path="/" element={<Main />} />
				<Route path="*" element={<Four04 />} />
			</Routes>
		</div>
	);
};

export default MyRoute;
