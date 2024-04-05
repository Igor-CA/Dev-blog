import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ node, inline, className, children, ...props }) => {
	const match = /language-(\w+)/.exec(className || "");
	if (!inline && match) {
		const language = match[1];
		return (
			<SyntaxHighlighter style={dracula} language={language} PreTag="div">
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		);
	}
	return (
		<code className="bg-slate-200 px-1 py-px rounded-sm dark:bg-slate-700" {...props}>
			{children}
		</code>
	);
};

export default CodeBlock;
