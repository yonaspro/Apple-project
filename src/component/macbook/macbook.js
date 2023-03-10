import React from "react";
import FooterLink from "../footer/FooterLink";
const Macbook = () => {
	return (
		<div>
			<section className="second-hightlight-wrapper">
				<div className="container">
					<div className="new-alert">New</div>

					<div className="title-wraper bold black">MacBook Air</div>

					<div className="description-wrapper black">
						Twice the speed. Twice the storage.
					</div>

					<div className="price-wrapper grey">From $999.</div>

					<div className="links-wrapper">
						<ul>
							<FooterLink url="#" linkName="Learn more" />
							<FooterLink url={"#"} linkName={"Buy"} />
							{/* <li>
								<a href="">Learn more</a>
							</li>
							<li>
								<a href="">Buy</a>
							</li> */}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Macbook;
