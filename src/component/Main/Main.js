import React from "react";
// import Header from "../header/header";
// import Footer from "../footer/footer";
// import Alert from "../alert/alert";
import Ipodpro from "../ipod-pro/ipodpro";
import Macbook from "../macbook/macbook";
import Iphone11Pro from "../ipone11-pro/iphone11-pro";
import Iphone11 from "../iphone-11/iphone11";
import Tv from "../Tv/tv";
import Arcade from "../Arcade/arcade";
import Youtube from "../Youtube/Youtube";
import FachIphone from "../Iphonefach/FachIphone";

const Main = () => {
	return (
		<div>
			{/* <Header /> */}
			{/* <Alert /> */}
			<Ipodpro />
			<Macbook />
			<Iphone11Pro />
			<Iphone11 />
			<Tv />
			<Arcade />
			<FachIphone/>
			<Youtube />
			{/* <Footer /> */}
		</div>
	);
};

export default Main;
