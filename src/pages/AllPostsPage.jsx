import postsList from "../posts.json";
import PostSummary from "../components/PostSummary";
import useLanguage from "../hooks/useLanguage";
import { useEffect, useState } from "react";

export default function AllPostsPage() {
	const { currentLanguage } = useLanguage();
	const [search, setSearch] = useState("");
	const [showingPosts, setShowingPosts] = useState(postsList);

	const handleChange = (e) => {
		const value = e.target.value;
		setSearch(value.toLowerCase());
	};

	useEffect(() => {
		const searchedTitles = postsList.filter((post) => {
			const title = post.title.toLowerCase();
			const description = post.description.toLowerCase();
			const found = title.includes(search) || description.includes(search);
			const sameLanguage = post.language === currentLanguage;
			return found && sameLanguage;
		});
		setShowingPosts(searchedTitles);
	}, [search, currentLanguage]);

	useEffect(() => {
		setSearch("");
	}, [currentLanguage]);

	return (
		<div className="px-4 py-2.5 max-w-5xl mx-auto min-h-svh">
			<h1 className="font-extrabold text-slate-900 text-4xl mb-2 dark:text-white">
				{currentLanguage === "en" ? "Welcome!" : "Seja bem-vindo!"}
			</h1>
			<p>
				{currentLanguage === "en"
					? "Join me as I explore the world of technology, talk in depth about personal projects, and share insights gained on my journey as a web developer."
					: "Acompanhe-me enquanto eu exploro o mundo da tecnologia, falo mais a fundo sobre projetos pessoais e compartilho dicas e conhecimentos adquiridos na minha jornada como desenvolvedor web."}
			</p>
			<input
				className="border border-slate-300 dark:border-slate-600 rounded-md w-full mt-2 mb-8 p-2 outline-slate-700 bg-slate-50 dark:bg-slate-800"
				type="text"
				placeholder={
					currentLanguage === "en" ? "Search post..." : "Buscar post..."
				}
				value={search}
				onChange={handleChange}
			/>
			{showingPosts.length > 0 ? (
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{showingPosts.map((post) => {
						return <PostSummary key={`${post.id}${post.language}`} post={post}></PostSummary>;
					})}
				</div>
			) : (
				<p className="p-5 text-slate-400  dark:text-slate-500 text-center text-5xl font-extrabold flex flex-col justify-center">
					{currentLanguage === "en"
						? "Sorry, nothing found :("
						: "Desculpa, nada foi encontrado :("}
				</p>
			)}
		</div>
	);
}
