export default function PostSummary({ post }) {
	const { title, tags, description, cover, date, id, language} = post;
	const formatedDate = new Date(date).toLocaleDateString(undefined,{year: 'numeric', month: 'long', day: 'numeric' });

	return (
		<a className="inline-block border border-slate-700 dark:border-slate-300 rounded-md overflow-hidden w-full" href={language==="en"?`#/post/${id}`:`#/pt-br/post/${id}`}>
			<div className="relative">
				<img
					src={`http://${window.location.hostname}/assets/${cover}`}
					alt="cover"
					className="w-full border border-slate-700 dark:border-slate-300"
				/>
				<ul className="absolute bottom-0 right-0 flex gap-2.5 px-2.5">
					{tags.map((tag, i) => {
						return (
							<li
								key={i}
								className="bg-slate-700 px-2.5 py-1 rounded-md my-2.5 text-slate-50 border border-slate-50"
							>
								{tag}
							</li>
						);
					})}
				</ul>
			</div>
			<section className="p-2.5">
				<h2 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h2>
				<p className="text-sm">{formatedDate}</p>
				<p>{description}</p>
			</section>
		</a>
	);
}
