import postsList from "../posts.json";
import PostSummary from "../components/PostSummary";

export default function AllPostsPage({ language }) {
	return (
		<div className="px-4 py-2.5 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
			{postsList.map((post) => {
				return post.language === language ? (
					<PostSummary key={post.id} post={post}></PostSummary>
				) : null;
			})}
		</div>
	);
}
