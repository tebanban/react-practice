import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	//console.log(useState(0));

	return (
		<div className="counter text-center my-5">
			<h3>Counter example</h3>
			<h3>Result: {count} likes </h3>
			<button onClick={() => setCount(count + 1)}> Add </button>
			<button
				onClick={() => {
					if (count !== 0) setCount(count - 1);
				}}>
				{" "}
				Su{" "}
			</button>{" "}
			{/*condicional para evitar que pase a -1 */}
		</div>
	);
};

export default Counter;
