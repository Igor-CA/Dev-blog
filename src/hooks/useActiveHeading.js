const { useEffect, useState, useRef } = require("react");

export default function useActiveHeader() {
	const [activeId, setActiveId] = useState();
	const headingElementsRef = useRef({});
	useEffect(() => {
		const headingElements = Array.from(document.querySelectorAll("h2, h3"));
		//Function called when a element observed by the observer is in view
		const callback = (headings) => {
			//Headings is a list of all elements currently being observed
			headingElementsRef.current = headings.reduce((map, headingElement) => {
				map[headingElement.target.id] = headingElement;
				return map;
			}, headingElementsRef.current);

			const visibleHeadings = [];
			Object.keys(headingElementsRef.current).forEach((key) => {
				const headingElement = headingElementsRef.current[key];
				if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
			});

			const getIndexFromId = (id) =>
				headingElements.findIndex((heading) => heading.id === id);

			if (visibleHeadings.length === 1) {
				setActiveId(visibleHeadings[0].target.id);
			} else if (visibleHeadings.length > 1) {
				const sortedVisibleHeadings = visibleHeadings.sort(
					(a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
				);
				setActiveId(sortedVisibleHeadings[0].target.id);
			}
		};

		const observer = new IntersectionObserver(callback, {
			rootMargin: "-90px 0px -50% 0px",
		});
		headingElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [setActiveId]);
	return activeId;
}

export function useScrollSpy(ids, options) {
	const [activeId, setActiveId] = useState();
	const observer = useRef();
	useEffect(() => {
		const elements = ids.map((id) => document.getElementById(id));
		observer.current?.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry?.isIntersecting) {
					setActiveId(entry.target.id);
				}
			});
		}, options);
		elements.forEach((el) => {
			if (el) {
				observer.current?.observe(el);
			}
		});
		return () => observer.current?.disconnect();
	}, [ids, options]);
	return activeId;
}
