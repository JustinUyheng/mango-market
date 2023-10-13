import { useState } from "react";
import { db, auth } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
	Box,
	Button,
	FormControl,
	Input,
	InputLabel,
	InputAdornment,
	TextField,
} from "@mui/material";

export const PostForm = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const postsCollectionRef = collection(db, "posts");
	console.log(auth?.currentUser);

	const submitPost = async () => {
		try {
			await addDoc(postsCollectionRef, {
				title: title,
				price: price,
				category: category,
				location: location,
				description: description,
				interest: 0,
				chats: 0,
				views: 0,
				username: auth?.currentUser?.displayName,
				userId: auth?.currentUser?.uid,
				hasBuyer: false,
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="standard-basic"
				label="Title"
				variant="standard"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				id="standard-basic"
				label="Price"
				variant="standard"
				onChange={(e) => setPrice(e.target.value)}
			/>
			<FormControl fullWidth sx={{ m: 1 }} variant="standard">
				<InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
				<Input
					id="standard-adornment-amount"
					endAdornment={<InputAdornment position="end">php</InputAdornment>}
				/>
			</FormControl>
			<TextField
				id="standard-basic"
				label="Category"
				variant="standard"
				onChange={(e) => setCategory(e.target.value)}
			/>
			<TextField
				id="standard-basic"
				label="Location"
				variant="standard"
				onChange={(e) => setLocation(e.target.value)}
			/>
			<TextField
				id="outlined-multiline-static"
				label="Description"
				multiline
				rows={4}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				placeholder="Title..."
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				placeholder="Title..."
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				placeholder="Category..."
				onChange={(e) => setCategory(e.target.value)}
			/>
			<input
				placeholder="Title..."
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				placeholder="Title..."
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Button variant="contained" onClick={submitPost}>
				Submit Post
			</Button>
		</Box>
	);
};
