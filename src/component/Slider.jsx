import React from "react"
import "./slider.css"

const images = [
	{
		name: "img 1",
		url: "https://images.unsplash.com/photo-1636461574965-ff53b2c28a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "img 2",
		url: "https://images.unsplash.com/photo-1636664138696-d3a2a67b8125?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "img 3",
		url: "https://images.unsplash.com/photo-1636526313852-66ef76b50bea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "img 4",
		url: "https://images.unsplash.com/photo-1636653569571-d7faa1892d99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "img 5",
		url: "https://images.unsplash.com/photo-1636656297576-2b7417a1df83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "img 6",
		url: "https://images.unsplash.com/photo-1636652576067-56f9541f6c57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "img 7",
		url: "https://images.unsplash.com/photo-1636649265673-11306d8abe49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},

	{
		name: "img 8",
		url: "https://images.unsplash.com/photo-1636634243597-efaf98debd6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},

	{
		name: "img 9",
		url: "https://images.unsplash.com/photo-1636622697498-8f60b9226824?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
	},
]

const Slider = () => {
	return (
		<div className="slider">
			<div className="slide-tracks">
				{images.map((imgs) => {
					return <img className="cards" src={imgs.url} alt="images" />
				})}
				{images.map((imgs) => {
					return <img className="cards" src={imgs.url} alt="images" />
				})}
			</div>
		</div>
	)
}

export default Slider
