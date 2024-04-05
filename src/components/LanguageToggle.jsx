import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguageToggle() {
	const [currentLanguage, setCurrentLanguage] = useState(
		window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
	);
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		setCurrentLanguage(
			window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
		);
	}, [location]);

	const handleLanguageChange = (e) => {
		const checked = e.target.checked;
		const language = checked ? "en" : "pt-br";

		const currentPath = window.location.pathname;

		// Remove any existing language prefix from the current path
		if (currentLanguage === "pt-br") {
			const newPath = currentPath.replace("/pt-br", "");
			navigate(newPath);
		}

		// Add the new language prefix
		if (currentLanguage === "en") {
			const newPath = `/pt-br${currentPath}`;
			navigate(newPath);
		}

		setCurrentLanguage(language);
	};
	return (
		<div className="p-2">
			<label className="relative w-16 h-8 inline-block" htmlFor="language">
				<input
					name="language"
					id="language"
					type="checkbox"
					className="opacity-0 w-0 h-0 peer"
					onChange={(e) => {
						handleLanguageChange(e);
					}}
					checked={currentLanguage === "en"}
				></input>
				<span className="absolute top-0 left-0 right-0 bottom-0 transition-all rounded-full bg-[url('./assets/br.svg')] bg-right bg-green-600 bg-no-repeat bg-contain cursor-pointer before:content-[''] before:absolute before:h-7 before:w-7 before:rounded-full before:bg-slate-50 before:z-10 before:bottom-0.5 before:left-0.5 slider peer-checked:bg-[url('./assets/us.svg')] peer-checked:bg-red-700 peer-checked:bg-left  peer-checked:before:translate-x-8"></span>
			</label>
		</div>
	);
}
