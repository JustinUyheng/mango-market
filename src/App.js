import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { PostList } from "./components/PostList/PostList";
import { PostForm } from "./components/PostForm/PostForm";
import { Copyright } from "./components/Copyright/Copyright";
import { Avatar, Button, Grid } from "@mui/material";
import "./App.css";

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
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: "100vh" }}
			>
				{/* <Avatar
				alt={auth?.currentUser?.displayName}
				src={auth?.currentUser?.photoURL}
			/>
			<h2>{auth?.currentUser?.uid}</h2>
			<Button variant="contained" color="primary" onClick={logout}>
				Logout
			</Button> */}
				<LoginForm />
				<PostList />
				<PostForm />
			</Grid>
			<Copyright />
		</div>
	);
}

export default App;
