import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const markdown = "# Hi, *Pluto*!";

function App() {
	return (
		<div className="App">
			<Markdown>{markdown}</Markdown>
		</div>
	);
}

export default App;
