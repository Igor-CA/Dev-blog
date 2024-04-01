import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import postsList from "../posts.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

export default function PostPage({ language }) {
	const [post, setPost] = useState();
	const navigate = useNavigate();
    const { id } = useParams();
	useEffect(() => {
		const sortedPost = postsList.find((post) => {
			if (post.id !== parseInt(id)) return false;
			if (post.language !== language) return false;
			return true;
		});
		if (sortedPost === undefined) {
			navigate("/404");
			return;
		}
		setPost(sortedPost);
	}, [language]);

	if (post) {
		const { cover, content, title, author, date, tags } = post;
		const formatedDate = new Date(date).toLocaleDateString(undefined, {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
		return (
			<div className="px-6 py-2.5">
				<img
					src={`http://${window.location.hostname}:3000/assets/${cover}`}
					alt="cover"
					className="w-full border border-slate-700 rounded-md"
				/>
				<h1 className="font-bold text-2xl">{title}</h1>
				{language === "pt-br" && (
					<p>
						Escrito por {author} on {formatedDate}{" "}
					</p>
				)}
				{language === "en" && (
					<p>
						Written by {author} on {formatedDate}{" "}
					</p>
				)}
				{tags.map((tag) => {
					return <span className="mx-2">#{tag} </span>;
				})}
				<hr className="border border-slate-600/60 mb-4" />
				<article className="markdown">
					<Markdown
						remarkPlugins={[remarkGfm]}
						components={{
							code: CodeBlock,
						}}
					>
						{content}
					</Markdown>
				</article>
			</div>
		);
	}
	return;
}
