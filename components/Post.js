import { useState, useEffect } from "react";

export default function Post(props) {
	const [post, setPost] = useState();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/1`)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
			});
	}, []);

	return (
		<>
			<br />
			<br />
			<strong>User ID:</strong> {props.post?.userId}
			<br />
			<strong>Title:</strong> {props.post?.title}
			<br />
			<strong>Body:</strong> {props.post?.body}
			<br />
		</>
	);
}
