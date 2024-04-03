import useNestedHeadings from "../hooks/useNestedHeadings";

export default function TableOfContent(){
	const headings = useNestedHeadings();
	const handleClick = (e, id) => {
		e.preventDefault();
		document.querySelector(`#${id}`).scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<aside className="sticky top-16 grid gap-4 self-start lg:w-64  justify-self-end">
			<section className="hidden gap-4 lg:grid">
				<h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
					Table of Contents
				</h2>
				<nav className="grid justify-items-start gap-2 text-sm font-medium">
					<ul>
						{headings.map(({ id, title, children }) => (
							<li key={id}>
								<a
									className="rounded-md transition-shadow focus-visible:outline-none focus-visible:ring-2 text-slate-900 dark:text-slate-100"
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
											<li>
												<a
													className="rounded-md transition-shadow focus-visible:outline-none focus-visible:ring-2 text-slate-900 dark:text-slate-100 pl-2.5"
													href={`#${id}`}
													key={id}
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
};
