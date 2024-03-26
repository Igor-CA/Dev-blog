import postsList from "../posts.json";
import PostSummary from "../components/PostSummary";

export default function AllPostsPage({language}) {
	return postsList.map((post) => {
		return post.language === language ? (
			<PostSummary key={post.id} post={post}></PostSummary>
		) : null;
	});
}
