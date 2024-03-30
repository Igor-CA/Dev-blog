import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPostsPage from "./pages/AllPostsPage";
import PostPage from "./pages/PostPage";
import MainHeader from "./components/MainHeader";

function App() {
	return (
		<div className="bg-slate-50 min-h-svh">
			<BrowserRouter>
				<MainHeader></MainHeader>
				<Routes>
					<Route
						path="/pt-br"
						element={<AllPostsPage language={"pt-br"} />}
					></Route>
					<Route path="/" element={<AllPostsPage language={"en"} />}></Route>
					<Route
						path="/pt-br/post/:id"
						element={<PostPage language={"pt-br"} />}
					></Route>
					<Route
						path="/post/:id"
						element={<PostPage language={"en"} />}
					></Route>
					<Route path="*" element={<p>Página não encontrada</p>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
