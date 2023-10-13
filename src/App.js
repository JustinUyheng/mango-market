import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { PostList } from "./components/PostList/PostList";
import { PostForm } from "./components/PostForm/PostForm";
import { Avatar, Button } from "@mui/material";
import "./App.css";
import { FileUploadForm } from "./components/FileUploadForm/FileUploadForm";

function App() {
	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="App">
			{/* <Avatar
				alt={auth?.currentUser?.displayName}
				src={auth?.currentUser?.photoURL}
			/>
			<h2>{auth?.currentUser?.uid}</h2>
			<Button variant="contained" color="primary" onClick={logout}>
				Logout
			</Button> */}
			{/* <LoginForm /> */}
			{/* <PostList /> */}
			<PostForm />
			<FileUploadForm />
		</div>
	);
}

export default App;
