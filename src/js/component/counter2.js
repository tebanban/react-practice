import React, { useState } from "react";

const Counter2 = () => {
	const [count2, setCount2] = useState(1);

	function incrementCount() {
		setCount2(prevCount2 => prevCount2 * 10);
	}

	return (
		<div>
			<div>Result: {count2}</div>
			<button onClick={incrementCount}> x10 </button>
		</div>
	);
};

export default Counter2;
