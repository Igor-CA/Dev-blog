import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useLanguage() {
	const [currentLanguage, setCurrentLanguage] = useState(
		window.location.hash.startsWith("#/pt-br") ? "pt-br" : "en"
	);
	const location = useLocation();

	useEffect(() => {
		setCurrentLanguage(
			window.location.hash.startsWith("#/pt-br") ? "pt-br" : "en"
		);
	}, [location]);

	return { currentLanguage, setCurrentLanguage };
}
