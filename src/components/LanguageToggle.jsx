import "../index.css";
import { useNavigate } from "react-router-dom";

export default function LanguageToggle() {
	const navigate = useNavigate();
	const handleLanguageChange = (e) => {
		const checked = e.target.checked;
		const language = checked ? "" : "pt-br";

		const currentPath = window.location.pathname;

		// Remove any existing language prefix from the current path
		if (currentPath.startsWith("/pt-br")) {
			const newPath = currentPath.replace("/pt-br", "");
			navigate(newPath);
		}

		// Add the new language prefix
		if (language === "pt-br") {
			const newPath = `/pt-br${currentPath}`;
			navigate(newPath);
		}
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
					defaultChecked
				></input>
				<span class="slider"></span>
			</label>
		</div>
	);
}
