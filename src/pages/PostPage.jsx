import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import postsList from "../posts.json";
import { useEffect, useState } from "react";

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
			navigate("/404");
			return;
		}
		setPost(sortedPost);
	}, [language]);
	return <div>{post && <Markdown>{post.content}</Markdown>}</div>;
}
