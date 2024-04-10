import { createElement } from "react";

export default function HeadingWithID({ level, children, ...props }) {
	const headingLevel = `h${level}`;
	let id;
	try {
		id = children
			.toLowerCase()
			.replaceAll(" ", "-")
			.replaceAll(/[?:()/–\s]+/g, "");
	} catch {
		id = children.props.children.toLowerCase().replaceAll(" ", "-");
	}
	const { node, ...filteredProps } = props;
	const className = "scroll-mt-16";
	return createElement(
		headingLevel,
		{ ...filteredProps, id, className },
		children
	);
}
