import { useState } from "react";
import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export const PostForm = () => {
	const [newPostTitle, setNewPostTitle] = useState("");
	const [newPostTag, setNewPostTag] = useState("");
	const postsCollectionRef = collection(db, "posts");

	const submitPost = async () => {
		try {
			await addDoc(postsCollectionRef, {
				title: newPostTitle,
				tag: newPostTag,
				hasBuyer: false,
				userId: auth?.currentUser?.uid,
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<input
				placeholder="Title..."
				onChange={(e) => setNewPostTitle(e.target.value)}
			/>
			<input
				placeholder="Tag..."
				onChange={(e) => setNewPostTag(e.target.value)}
			/>
			<button onClick={submitPost}>Submit Post</button>
		</div>
	);
};
