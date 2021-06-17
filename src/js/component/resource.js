import React, { useEffect, useState } from "react";

const Resource = () => {
	const [resourcexType, setResourcexType] = useState("posts");
	const [items, setItems] = useState([]);

	useEffect(
		() => {
			fetch(`https://jsonplaceholder.typicode.com/${resourcexType}`)
				.then(response => response.json())
				.then(json => setItems(json));
		},
		[resourcexType]
	);

	return (
		<div className="resource">
			<div>
				<h3>Fetch-useEffect example</h3>
				<button onClick={() => setResourcexType("posts")}>Posts</button>
				<button onClick={() => setResourcexType("users")}>Users</button>
				<button onClick={() => setResourcexType("comments")}>Comments</button>
			</div>
			<h1>{resourcexType}</h1>

			{items.map(item => {
				return <pre key="item">{JSON.stringify(item)}</pre>;
			})}
		</div>
	);
};
export default Resource;
