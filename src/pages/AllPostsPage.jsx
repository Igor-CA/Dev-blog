import postsList from "../posts.json";
import PostSummary from "../components/PostSummary";
import useLanguage from "../hooks/useLanguage";

export default function AllPostsPage() {
	const {currentLanguage} = useLanguage()
	return (
		<div className="px-4 py-2.5 max-w-5xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{postsList.map((post) => {
				return post.language === currentLanguage ? (
					<PostSummary key={post.id} post={post}></PostSummary>
				) : null;
			})}
		</div>
	);
}
