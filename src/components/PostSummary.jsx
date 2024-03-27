import { Link } from "react-router-dom";
import "../index.css";

export default function PostSummary({ post }) {
	const { title, tags, description, cover, date, id } = post;
	const formatedDate = new Date(date).toLocaleDateString();
	return (
		<Link className="post-summary" to={`./post/${id}`}>
			<img
				src={`http://${window.location.hostname}:3000/assets/${cover}`}
				alt="cover"
				className="post-summary__cover"
			/>
			<ul className="post-summary__tags">
				{tags.map((tag, i) => {
					return <li key={i}>{tag}</li>;
				})}
			</ul>
			<section className="post-summary__content">
				<h2>{title}</h2>
				<p>{formatedDate}</p>
				<p>{description}</p>
			</section>
		</Link>
	);
}
