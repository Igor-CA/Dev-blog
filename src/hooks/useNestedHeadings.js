import { useEffect, useState } from "react";

export default function useNestedHeadings(post) {
	const [nestedHeadings, setNestedHeadings] = useState([]);
	useEffect(() => {
		const headingElements = Array.from(document.querySelectorAll("#article h2, h3"));
		const nestedHeadings = getNestedHeadings(headingElements);
		setNestedHeadings(nestedHeadings);
	}, [post]);
	return nestedHeadings;
}

const getNestedHeadings = (headingsList) => {
	let nestedHeadings = [];

	for (let i = 0; i < headingsList.length; i++) {
		const heading = headingsList[i];
		if (heading.tagName === "H2") {
			nestedHeadings.push({
				title: heading.innerText,
				id: heading.id,
				children: [],
			});
		} else if (heading.tagName === "H3") {
			nestedHeadings[nestedHeadings.length - 1].children.push({
				title: heading.innerText,
				id: heading.id,
			});
		}
	}

	return nestedHeadings;
};
