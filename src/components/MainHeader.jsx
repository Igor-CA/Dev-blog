import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { LuMoonStar, LuSunDim } from "react-icons/lu";
import useLanguage from "../hooks/useLanguage";

export default function MainHeader() {
	const {currentLanguage} = useLanguage()
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


	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<header className="w-full bg-slate-50/80 dark:bg-slate-800/60  dark:shadow-gray-900 backdrop-blur-md sticky top-0 z-10 shadow-sm">
			<div className="w-full bg-gradient-to-r from-sky-700 to-indigo-500 h-1.5 "></div>
			<div className="flex justify-between items-center  max-w-5xl mx-auto px-3">
				<Link
					to={currentLanguage === "pt-br" ? "/pt-br" : "/"}
					className="font-bold text-xl p-2.5"
				>
					Blog
				</Link>
				<div className="flex items-center gap-3">
					<button
						className=" border border-slate-600 dark:border-slate-200 text-2xl p-1 rounded-md end"
						onClick={toggleTheme}
					>
						{theme === "light" ? <LuSunDim /> : <LuMoonStar />}
					</button>
					<LanguageToggle></LanguageToggle>
				</div>
			</div>
		</header>
	);
}
