import { useEffect, useState } from "react";
import "../index.css";
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
		<div>
			<label className="switch" htmlFor="language">
				<span className={"fi fi-us us"}></span>
				<span className={"fi fi-br brazil"}></span>
				<input
					name="language"
					id="language"
					type="checkbox"
					className="input"
					onChange={(e) => {
						handleLanguageChange(e);
					}}
					checked={currentLanguage === "en"}
				></input>
				<span className="slider"></span>
			</label>
		</div>
	);
}
