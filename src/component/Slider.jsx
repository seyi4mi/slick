import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.css"

const images = [
	{
		name: "img 1",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},
	{
		name: "img 2",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},
	{
		name: "img 3",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},
	{
		name: "img 4",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},
	{
		name: "img 5",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},
	{
		name: "img 6",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},
	{
		name: "img 7",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},

	{
		name: "img 8",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},

	{
		name: "img 9",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80",
	},
]

const cardContainer = {
	width: "100%",
}

export default class PauseOnHover extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		}
		return (
			<div className="cards" style={cardContainer}>
				<Slider {...settings}>
					{images.map((imgs) => {
						return (
							<div>
								<img src={imgs.url} alt="images" width="90%" />
							</div>
						)
					})}
				</Slider>
			</div>
		)
	}
}
