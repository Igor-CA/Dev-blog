import useActiveHeader from "../hooks/useActiveHeading";
import useLanguage from "../hooks/useLanguage";
import useNestedHeadings from "../hooks/useNestedHeadings";

export default function TableOfContent() {
	const {currentLanguage} = useLanguage()
	const headings = useNestedHeadings();
	const activeId = useActiveHeader();

	const handleClick = (e, id) => {
		e.preventDefault();
		document.querySelector(`#${id}`).scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<aside className="sticky top-16 grid gap-4 self-start lg:w-64  justify-self-end">
			<section className="hidden gap-4 lg:grid">
				<h4 className="text-xl font-bold text-slate-900 dark:text-white">
					{currentLanguage==="en"?"Table of Contents":"Tópicos do post"}
				</h4>
				<nav className="text-sm font-medium">
					<ul>
						{headings.map(({ id, title, children }) => (
							<li key={id} className="py-1 pl-4">
								<a
									className={getStyle(activeId, id)}
									href={`#${id}`}
									onClick={(e) => {
										handleClick(e, id);
									}}
								>
									{title}
								</a>
								{children.length > 0 && (
									<ul>
										{children.map(({ id, title }) => (
											<li key={id}>
												<a
													className={`${getStyle(activeId, id)} pl-2`}
													href={`#${id}`}
													onClick={(e) => {
														e.preventDefault();
														document.querySelector(`#${id}`).scrollIntoView({
															behavior: "smooth",
														});
													}}
												>
													{title}
												</a>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</nav>
			</section>
		</aside>
	);
}

const getStyle = (activeId, id) => {
	const activeStyle = "text-slate-900 dark:text-white";
	const inactiveStyle = "text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300";
	return activeId === id ? activeStyle : inactiveStyle;
};
