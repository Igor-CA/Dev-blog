import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { LuSunDim } from "react-icons/lu";


export default function MainHeader() {
	const [currentLanguage, setCurrentLanguage] = useState(
		window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
	);
	const location = useLocation();
	useEffect(() => {
		setCurrentLanguage(
			window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
		);
	}, [location]);

	return (
		<header className="w-full bg-slate-50/80 backdrop-blur-md  sticky top-0 z-10 shadow-md">
			<div className="w-full bg-slate-700 h-1.5"></div>
			<div className="flex justify-around items-center">
				<Link to={currentLanguage === "pt-br" ? "/pt-br" : "/"} className="font-bold text-xl p-2.5">Blog</Link>
				<button className="border border-slate-700 text-2xl p-1 rounded-md"><LuSunDim /></button>
				<LanguageToggle></LanguageToggle>
			</div>
		</header>
	);
}
