import "./index.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LanguageToggle from "./components/LanguageToggle";
import AllPostsPage from "./pages/AllPostsPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<LanguageToggle></LanguageToggle>
				<Routes>
					<Route path="/pt-br" element={<AllPostsPage language={"pt-br"} />}></Route>
					<Route path="/" element={<AllPostsPage language={"en"}/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
