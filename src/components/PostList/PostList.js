import { useCallback, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {
	getDocs,
	collection,
	deleteDoc,
	updateDoc,
	doc,
} from "firebase/firestore";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

export const PostList = () => {
	const [posts, setPosts] = useState([]);
	const [updatedPostTitle, setUpdatedTitle] = useState("");
	const postsCollectionRef = collection(db, "posts");

	const getPosts = useCallback(async () => {
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
	}, [postsCollectionRef]);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

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

	const itemData = [
		{
			img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
			title: "Breakfast",
			price: "28,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@bkristastucchio",
		},
		{
			img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
			title: "Burger",
			price: "10,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@rollelflex_graphy726",
		},
		{
			img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
			title: "Camera",
			price: "20,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@helloimnik",
		},
		{
			img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
			title: "Coffee",
			price: "15,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@nolanissac",
		},
		{
			img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
			title: "Hats",
			price: "50,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@hjrc33",
		},
		{
			img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
			title: "Honey",
			price: "200,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@arwinneil",
		},
		{
			img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
			title: "Basketball",
			price: "8,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@tjdragotta",
		},
		{
			img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
			title: "Fern",
			price: "Sharing",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@katie_wasserman",
		},
		{
			img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
			title: "Mushrooms",
			price: "28,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@silverdalex",
		},
		{
			img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
			title: "Tomato basil",
			price: "28,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@shelleypauls",
		},
		{
			img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
			title: "Sea star",
			price: "28,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@peterlaster",
		},
		{
			img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
			title: "Bike",
			price: "28,000",
			location: "Banilad, Cebu City, Cebu",
			interest: "3",
			chat: "20",
			author: "@southside_customs",
		},
	];

	return (
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
					<button onClick={() => updatePostTitle(post.id)}>Update Title</button>
				</div>
			))}
			<ImageList sx={{ width: 1440 }} cols={3} gap={20}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=248&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
						/>
						<ImageListItemBar
							title={item.title}
							subtitle={
								<>
									<span>by: {item.author}</span>
									<span>{item.price} php</span>
									<span>{item.location}</span>
									<span>Interest {item.interest}</span>
									<span>Chat {item.chat}</span>
								</>
							}
							position="below"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};
