import { useState } from "react"; 

export default function ClickCounter() {
	// Only numClicks is set to 0, setNumClicks is a function
	const [numClicks, setNumClicks] = useState(0);

	function increaseNumClicks(e, message) {
		setNumClicks(numClicks + 1);
		console.log(message);
	}

	function decrementNumClicks(e, message) {
		console.log(message);
		setNumClicks(numClicks - 1);
	}

	function resetNumClicks(e, message) {
		console.log(message);
		setNumClicks(0);
	}

	return (
		<>
			<button
				onClick={(e) => {
					increaseNumClicks(e, "Incrementing");
				}}
			>
				Increment
			</button>
			<button>Clicks: {numClicks}</button>
			<button
				onClick={(e) => {
					decrementNumClicks(e, "Decrementing");
				}}
			>
				Decrement
			</button>
			<button
				onClick={(e) => {
					resetNumClicks(e, "Resetting");
				}}
			>
				Reset
			</button>
		</>
	);
}
