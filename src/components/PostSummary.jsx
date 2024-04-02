import { Link } from "react-router-dom";

export default function PostSummary({ post }) {
	const { title, tags, description, cover, date, id } = post;
	const formatedDate = new Date(date).toLocaleDateString(undefined,{year: 'numeric', month: 'long', day: 'numeric' });
	console.log({ date, formatedDate });
	return (
		<Link className="inline-block border border-slate-700 rounded-md overflow-hidden w-full" to={`./post/${id}`}>
			<div className="relative">
				<img
					src={`http://${window.location.hostname}:3000/assets/${cover}`}
					alt="cover"
					className="w-full border border-slate-700"
				/>
				<ul className="absolute bottom-0 right-0 flex gap-2.5 px-2.5">
					{tags.map((tag, i) => {
						return (
							<li
								key={i}
								className="bg-slate-700 p-2.5 rounded-md my-2.5 text-slate-50 border border-slate-50"
							>
								{tag}
							</li>
						);
					})}
				</ul>
			</div>
			<section className="p-2.5">
				<h2 className="font-bold text-lg text-slate-900">{title}</h2>
				<p className="text-sm">{formatedDate}</p>
				<p>{description}</p>
			</section>
		</Link>
	);
}
