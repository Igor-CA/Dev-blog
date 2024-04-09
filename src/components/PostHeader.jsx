export default function PostHeader({ post }) {
	const { cover, title, author, date, tags, language } = post;
	const formatedDate = new Date(date).toLocaleDateString(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return (
		<div className="mx-auto">
			<img
				src={`http://${window.location.hostname}:3000/assets/${cover}`}
				alt="cover"
				className="w-full border border-slate-700 dark:border-slate-300 rounded-md mb-5"
			/>
			<h1 className="font-extrabold text-slate-900 text-4xl mb-2 dark:text-white">
				{title}
			</h1>

			{language === "en" ? (
				<p>
					Written by {author} on {formatedDate}{" "}
				</p>
			) : (
				<p>
					Escrito por {author} on {formatedDate}{" "}
				</p>
			)}
			
			<div className="my-2">
				{tags.map((tag) => {
					return (
						<span className="mx-2" key={tag}>
							#{tag}{" "}
						</span>
					);
				})}
			</div>
			<hr className="border border-slate-700/60 dark:border-slate-300/60 mb-4" />
		</div>
	);
}
