import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FachIphone = () => {
	const [products, setproduct] = useState([]);
	useEffect(() => {
		fetch("/iphone.json")
        // fetch("http://localhost:3000/bag")
			// fetch("http://localhost:3001/iphones")
            .then((res) => res.json())
			.then((x) => {
				setproduct(x.products);
			})
			.catch(() => console.log("canot fach the data"));
	}, []);
	console.log(products);
	let order = 1;
	return (
		<div>
			<section className="internal-page-wrapper top-100">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper bold">Iphones</div>
							<div className="brief-description">
								The best for the brightest.
							</div>
						</div>
					</div>
					{products.map((products) => {
						let id = products.product_url;
						let title = products.product_name;
						let img = products.product_img;
						let Brief = products.product_brief_description;
						let StartPrice = products.starting_price;
						let PriceRange = products.price_range;
						let productPage = "/iphone/" + id;

						let order1 = 1;
						let order2 = 2;
						if (order !== 1) {
							order1 = 2;
							order2 = 1;
							order--;
						} else {
							order++;
						}

						let productDiv = (
							<div
								key={id}
								className="row justify-content-center text-center product-holder h-100 top-100 bottom-100">
								<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
									<div className="product-title">{title}</div>
									<div className="product-brief">{Brief}</div>
									<div className="starting-price">
										{`Starting at ${StartPrice}`}
									</div>
									<div className="monthly-price">{PriceRange}</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<Link to={productPage}>Learn more</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className={`col-sm-12 col-md-6 order-${order2}`}>
									<div className="prodict-image">
										<img src={img} alt="" />
									</div>
								</div>
							</div>
						);
						return productDiv;
					})}
				</div>
			</section>
		</div>
	);
};

export default FachIphone;
