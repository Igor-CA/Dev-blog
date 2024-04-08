import postsList from "../posts.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostHeader from "../components/PostHeader";
import PostContent from "../components/PostContent";
import RecomendedPosts from "../components/RecomendedPosts";

export default function PostPage({ language }) {
	const [post, setPost] = useState();
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		const sortedPost = postsList.find((post) => {
			if (post.id !== parseInt(id)) return false;
			if (post.language !== language) return false;
			return true;
		});
		if (sortedPost === undefined) {
			language === "en"?navigate("/404"):navigate("/pt-br/404");
			return;
		}
		setPost(sortedPost);
	}, [language]);

	if (post) {
		return (
			<div className="px-4 py-2.5 max-w-5xl mx-auto">
				<PostHeader post={post}></PostHeader>
				<PostContent post={post}></PostContent>
				<RecomendedPosts post={post}></RecomendedPosts>
			</div>
		);
	}
	return;
}
