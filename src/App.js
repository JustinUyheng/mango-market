import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { db, auth, storage } from "./config/firebase";
import {
	getDocs,
	collection,
	addDoc,
	deleteDoc,
	updateDoc,
	doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function App() {
	const [posts, setPosts] = useState([]);

	const [newPostTitle, setNewPostTitle] = useState("");
	const [newPostTag, setNewPostTag] = useState("");

	const [updatedPostTitle, setUpdatedTitle] = useState("");

	const [fileUpload, setFileUpload] = useState(null);

	const postsCollectionRef = collection(db, "posts");

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		try {
			const data = await getDocs(postsCollectionRef);
			const filteredData = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setPosts(filteredData);
		} catch (error) {
			console.error(error);
		}
	};

	const deletePost = async (id) => {
		try {
			const postDoc = doc(db, "posts", id);
			await deleteDoc(postDoc);

			getPosts();
		} catch (error) {
			console.error(error);
		}
	};

	const updatePostTitle = async (id) => {
		try {
			const postDoc = doc(db, "posts", id);
			await updateDoc(postDoc, { title: updatedPostTitle });

			getPosts();
		} catch (error) {
			console.error(error);
		}
	};

	const submitPost = async () => {
		try {
			await addDoc(postsCollectionRef, {
				title: newPostTitle,
				tag: newPostTag,
				hasBuyer: false,
				userId: auth?.currentUser?.uid,
			});

			getPosts();
		} catch (error) {
			console.error(error);
		}
	};

	const uploadFile = async () => {
		if (!fileUpload) return;
		const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
		try {
			await uploadBytes(filesFolderRef, fileUpload);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="App">
			<Auth />
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
			<div>
				{posts.map((post) => (
					<div key={post.id}>
						<h1>{post.title}</h1>
						<h3>{post.tag}</h3>
						<button onClick={() => deletePost(post.id)}>Delete Post</button>

						<input
							placeholder="New Title..."
							onChange={(e) => setUpdatedTitle(e.target.value)}
						/>
						<button onClick={() => updatePostTitle(post.id)}>
							Update Title
						</button>
					</div>
				))}
			</div>

			<div>
				<input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
				<button onClick={uploadFile}>Upload File</button>
			</div>
		</div>
	);
}

export default App;
