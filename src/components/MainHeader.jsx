import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { LuMoonStar, LuSunDim } from "react-icons/lu";

export default function MainHeader() {
	const [currentLanguage, setCurrentLanguage] = useState(
		window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
	);
	const [theme, setTheme] = useState(
		localStorage.theme ? localStorage.theme : "light"
	);
	useEffect(() => {
		if (theme === "light") {
			document.body.classList = "light";
			localStorage.theme = "light";
		} else {
			document.body.classList = "dark";
			localStorage.theme = "dark";
		}
	}, [theme]);
	
	const location = useLocation();
	useEffect(() => {
		setCurrentLanguage(
			window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
		);
	}, [location]);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<header className="w-full bg-slate-50/80 dark:bg-slate-800/60  dark:shadow-gray-900 backdrop-blur-md sticky top-0 z-10 shadow-sm">
			<div className="w-full bg-gradient-to-r from-sky-800 to-indigo-600 h-1.5 "></div>
			<div className="flex justify-between items-center  max-w-5xl mx-auto">
				<Link
					to={currentLanguage === "pt-br" ? "/pt-br" : "/"}
					className="font-bold text-xl p-2.5"
				>
					Blog
				</Link>
				<button
					className="border border-slate-600 dark:border-slate-200 text-2xl p-1 rounded-md"
					onClick={toggleTheme}
				>
					{theme === "light" ? <LuSunDim /> : <LuMoonStar />}
				</button>
				<LanguageToggle></LanguageToggle>
			</div>
		</header>
	);
}
