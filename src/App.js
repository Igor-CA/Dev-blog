import "./index.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LanguageToggle from "./components/LanguageToggle";
import AllPostsPage from "./pages/AllPostsPage";
import PostPage from "./pages/PostPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<LanguageToggle></LanguageToggle>
				<Routes>
					<Route path="/pt-br" element={<AllPostsPage language={"pt-br"} />}></Route>
					<Route path="/" element={<AllPostsPage language={"en"}/>}></Route>
					<Route path="/pt-br/post/:id" element={<PostPage language={"pt-br"} />}></Route>
					<Route path="/post/:id" element={<PostPage language={"en"} />}></Route>
					<Route path="*" element={<p>Página não encontrada</p>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
