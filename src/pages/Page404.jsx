import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

export default function Page404() {
	const {currentLanguage} = useLanguage()

	return (
		<div className="p-5 text-slate-400  dark:text-slate-500 text-center text-5xl font-extrabold min-h-svh flex flex-col justify-center">
			<span>404</span>
			<span>
				{currentLanguage === "en" ? "Page not found" : "Página não encontrada"}
			</span>
			<Link
				className="text-base underline mt-3 hover:text-slate-500 dark:hover:text-slate-400"
				to={currentLanguage === "en" ? "/" : "/pt-br"}
			>
				{currentLanguage === "en"
					? "Return to main page"
					: "Retornar à página principal"}
			</Link>
		</div>
	);
}
