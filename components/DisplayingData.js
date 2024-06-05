import { useState } from "react";

export function DisplayingData() {
	const [users, setUsers] = useState([
		{ user: "fred", active: true, age: 40 },
		{ user: "pebbles", active: false, age: 1 },
		{ user: "barney", active: true, age: 36 },
	]);

	return (
		<>
		{/* Check if the first user is active or not and display a message */}
		<div>{users[0].active && <p>{users[0].user} is Active!</p>}</div>;  
		
		{/* Check if the second user is active or not and display a message */}
		<div>
			{users[1].active ? <p>{users[1].user} is Active!</p> : <p>{users[0].user} is Inactive!</p>}
		</div>
		<br />
		<table>
			<thead>
				<tr>
					<th>User</th>
					<th>Active</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<tr key={index}>
						<td>{user.user}</td>
						<td>{user.active ? "Active" : "Inactive"}</td>
						<td>{user.age}</td>
					</tr>
					
				))}
			</tbody>
			
		</table>
		</>
	)
    
}
