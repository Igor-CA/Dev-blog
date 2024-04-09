import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPostsPage from "./pages/AllPostsPage";
import PostPage from "./pages/PostPage";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";

function App() {
	return (
		<div className="bg-slate-50 min-h-svh text-slate-700 dark:bg-slate-800 dark:text-slate-300">
			<BrowserRouter>
				<MainHeader></MainHeader>
				<Routes>
					<Route path="/" element={<AllPostsPage />}></Route>
					<Route path="/post/:id" element={<PostPage />}></Route>
					<Route path="/pt-br" element={<AllPostsPage />}></Route>
					<Route path="/pt-br/post/:id" element={<PostPage />}></Route>
					<Route path="*" element={<Page404 />}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
