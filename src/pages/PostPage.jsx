import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import postsList from "../posts.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import HeadingWithID from "../components/HeadingWithId";
import TableOfContent from "../components/TableOfContent";

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
						className="w-full border border-slate-700 dark:border-slate-300 rounded-md mb-5"
					/>
					<h1 className="font-extrabold text-slate-900 text-4xl mb-2 dark:text-white">
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
							return (
								<span className="mx-2" key={tag}>
									#{tag}{" "}
								</span>
							);
						})}
					</div>
					<hr className="border border-slate-700/60 dark:border-slate-300/60 mb-4" />
				</div>
				<section className="mt-4 lg:grid lg:grid-cols-[auto,1fr] ">
					<article className="prose prose-slate dark:prose-invert max-w-4xl w-full break-words lg:max-w-2xl">
						<Markdown
							remarkPlugins={[remarkGfm]}
							components={{
								code: CodeBlock,
								h2: (props) => <HeadingWithID level={2} {...props} />,
								h3: (props) => <HeadingWithID level={3} {...props} />,
							}}
						>
							{content}
						</Markdown>
					</article>
					<TableOfContent></TableOfContent>
				</section>
			</div>
		);
	}
	return;
}
