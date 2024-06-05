import Clock from "@/components/Clock";
import Hello from "@/components/Hello";
import ClickCounter from "@/components/ClickCounter";
import Post from "@/components/Post";
import { DisplayingData } from "@/components/DisplayingData";

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`).then((response => response.json())).then((data => {
      resolve({
        props: {
          staticPost: data
        }
      })
    }))
  })
}

export default function Home(props) {
  console.log(props)
	return (
		<>
			<Hello />
			<Clock locale="en-CA" />
			<ClickCounter />
			<Post post={props.staticPost} />
      <DisplayingData />
		</>
	);
}
