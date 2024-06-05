import { useState } from "react";

export function DisplayingData() {
	const [users, setUsers] = useState([
		{ user: "fred", active: true, age: 40 },
		{ user: "pebbles", active: false, age: 1 },
		{ user: "barney", active: true, age: 36 },
	]);

	return <div>{users[0].active && <p>{users[0].user} is Active!</p>}</div>; // Check if the first user is active or not and display a message
    
}
