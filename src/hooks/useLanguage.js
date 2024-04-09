import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useLanguage() {
	const [currentLanguage, setCurrentLanguage] = useState(
		window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
	);
	const location = useLocation();

	useEffect(() => {
		setCurrentLanguage(
			window.location.pathname.startsWith("/pt-br") ? "pt-br" : "en"
		);
	}, [location]);

	return { currentLanguage, setCurrentLanguage };
}
