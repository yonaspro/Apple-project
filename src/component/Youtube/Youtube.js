import React, { useState, useEffect } from "react";
import "./Youtube.css";
import { Link } from "react-router-dom";

const Youtube = () => {
	const [youtube, setyoutube] = useState([]);
	useEffect(() => {
		fetch("/youtube.json")
		
			.then((response) => response.json())
			.then((data) => {
				// const youtubeData = data.items;
				setyoutube(data.items);
			});
	}, [youtube]);
	let titels = "Latest Videos";

	// console.log(youtube);
	return (
		<div>
			<div className="allVideosWrapper">
				<div className="container">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper bold video-title-wrapper">
								{titels}
							</div>
						</div>
						{youtube?.map((singelvideo) => {
							let imgurl = singelvideo.snippet.thumbnails.high.url;
							let description = singelvideo.snippet.description;
							let videoId = singelvideo.id.videoId;
							let time = singelvideo.snippet.publishTime;
							let vidlink = `https://www.youtube.com/watch?v=${videoId}`;
							let videoRoper = (
								<div key={videoId} className="col-sm-12 col-md-4">
									<div className="singleVideoWrapper">
										<div className="videoThumbnail">
											<Link to={vidlink} target="_blank" rel="">
												<img src={imgurl} alt="my pic" />
											</Link>
										</div>
										<div className="videoDesc">{description}</div>
										<div> {time}</div>
									</div>
								</div>
							);
							return videoRoper;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Youtube;
