import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	Grid,
	IconButton,
	Link,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/logo.png";

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/JustinUyheng">
				Justin Uyheng
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
};

export const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			console.log("Logged in with email");
		} catch (error) {
			console.error(error);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider).then((result) => {
				const user = result.user;
				console.log(user);
			});
			console.log("Logged in with Google");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Grid>
			<Box
				component="form"
				sx={{ minWidth: 600 }}
				noValidate
				autoComplete="off"
			>
				<Stack spacing={{ xs: 1, sm: 2 }}>
					<Box>
						<img alt="Mango Market" src={logo} width={300} height={300} />
					</Box>
					<Typography variant="h1" gutterBottom>
						Sign In
					</Typography>
					<TextField
						variant="standard"
						required
						id="email"
						label="Email"
						name="email"
						autoFocus
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						variant="standard"
						required
						id="password"
						label="Password"
						name="password"
						type="password"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button variant="contained" onClick={signIn}>
						Sign In
					</Button>
					<Link href="#" variant="body2">
						{"Don't have an account? Sign Up"}
					</Link>
					<Divider>or continue using</Divider>
					<IconButton onClick={signInWithGoogle}>
						<GoogleIcon />
					</IconButton>
					<Box mt={5}>
						<Copyright />
					</Box>
				</Stack>
			</Box>
		</Grid>
	);
};
