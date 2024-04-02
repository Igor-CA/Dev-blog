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
			<div className="px-4 py-2.5 max-w-5xl mx-auto">
				<div className="mx-auto">
					<img
						src={`http://${window.location.hostname}:3000/assets/${cover}`}
						alt="cover"
						className="w-full border border-slate-700 rounded-md mb-5"
					/>
					<h1 className="font-extrabold text-slate-900 text-4xl mb-2">
						{title}
					</h1>
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
					<div className="my-2">
						{tags.map((tag) => {
							return <span className="mx-2">#{tag} </span>;
						})}
					</div>
					<hr className="border border-slate-700/60 mb-4" />
				</div>
				<section className="mt-4 lg:grid lg:grid-cols-[auto,1fr] ">
					<article className="prose prose-slate max-w-4xl w-full break-words lg:max-w-2xl">
						<Markdown
							remarkPlugins={[remarkGfm]}
							components={{
								code: CodeBlock,
							}}
						>
							{content}
						</Markdown>
					</article>
					<aside class="sticky top-16 grid gap-4 self-start lg:w-64  justify-self-end">
						<section class="hidden gap-4 lg:grid">
							<h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
								Table of Contents
							</h2>
							<nav class="grid justify-items-start gap-2 text-sm font-medium">
								<a
									class="rounded-md transition-shadow focus-visible:outline-none focus-visible:ring-2 text-slate-900 dark:text-slate-100"
									href="#exemple1"
								>
									Exemple of content
								</a>
							</nav>
						</section>
					</aside>
				</section>
			</div>
		);
	}
	return;
}
