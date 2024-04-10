import postsList from "../posts.json";
import PostSummary from "./PostSummary";

export default function RecomendedPosts({ post }) {
	//TODO: Add better filters when more real posts are created
	const getRecomendedPosts = (pagePost) => {
		const recomendations = postsList.filter(
			(post) => post.id !== pagePost.id && post.language === pagePost.language
		);
		if (recomendations.length > 3) {
			return recomendations.slice(0, 3);
		}
		return recomendations;
	};

	const recomendedPosts = getRecomendedPosts(post);

	return (
		<div>
			<h2 className="text-2xl mt-12 mb-4 font-bold text-slate-900 dark:text-white">
				{post.language === "en" ? "Other posts" : "Outros posts"}
			</h2>
			{recomendedPosts.length > 0 ? (
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{recomendedPosts.map((recomendation) => {
						return <PostSummary post={recomendation}></PostSummary>;
					})}
				</div>
			) : (
				<p className="text-xl my-12 text-slate-700 dark:text-slate-300 text-center">
					{post.language === "en"
						? "Sorry! there are no other posts for now :("
						: "Descuplas! Não há outros posts por agora :("}
				</p>
			)}
		</div>
	);
}
