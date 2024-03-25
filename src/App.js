import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import postsList from "./posts.json";

const markdown = postsList[1].content;

function App() {
	return (
		<div className="App">
			<Markdown>{markdown}</Markdown>
		</div>
	);
}

export default App;
