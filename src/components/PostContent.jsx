import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "../components/CodeBlock";
import HeadingWithID from "../components/HeadingWithId";
import TableOfContent from "./TableOfContent";

export default function PostContent({post}) {
    const { content } = post;
	return (
		<section className="mt-4 lg:grid lg:grid-cols-[auto,1fr] ">
			<article id="article" className="prose prose-slate dark:prose-invert max-w-4xl w-full break-words lg:max-w-2xl">
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
	);
}
