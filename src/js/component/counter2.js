import React, { useState } from "react";

const Counter2 = () => {
	const [count2, setCount2] = useState(1);

	function incrementCount() {
		setCount2(prevCount2 => prevCount2 * 10);
	}

	return (
		<div className="counter text-center my-5">
			<div>
				<h5>Multiply by 10</h5>
				<h3>Result: {count2}</h3>
			</div>
			<button onClick={incrementCount}> x10 </button>
		</div>
	);
};

export default Counter2;
