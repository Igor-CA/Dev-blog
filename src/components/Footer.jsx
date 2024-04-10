import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
	return (
		<footer className="mx-4 mt-12 lg:mx-auto py-5 max-w-5xl border-slate-700/60 dark:border-slate-300/60 border-t-2 flex justify-around">
			<a
                target="_blank"
                rel="noreferrer"
				href="https://github.com/Igor-CA"
				className="flex flex-col items-center font-semibold gap-1 hover:text-slate-400  dark:hover:text-slate-500"
			>
				Github <FaGithub />
			</a>
			<a
                target="_blank"
                rel="noreferrer"
				href="https://www.linkedin.com/in/igor-caldeira-andrade-abab0629a/"
				className="flex flex-col items-center font-semibold gap-1 hover:text-slate-400  dark:hover:text-slate-500"
			>
				Linkedin <FaLinkedin />
			</a>
			<a
                target="_blank"
                rel="noreferrer"
				href="mailto:igorcaldeira.andrade@gmail.com"
				className="flex flex-col items-center font-semibold gap-1 hover:text-slate-400  dark:hover:text-slate-500"
			>
				Email <MdEmail />
			</a>
		</footer>
	);
}
