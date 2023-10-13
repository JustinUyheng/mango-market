import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
	Box,
	Button,
	Checkbox,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import logo from "../assets/logo.png";

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
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
		<Grid container component="main">
			<CssBaseline />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
				<div>
					<img alt="Mango Market" src={logo} />
					<Typography>Sign In</Typography>
					<form noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							// fullWidth
							variant="contained"
							color="primary"
							onClick={signIn}
						>
							Sign In
						</Button>
						<Button
							// fullWidth
							variant="contained"
							color="primary"
							onClick={signInWithGoogle}
						>
							Sign In With Google
						</Button>
						<Grid container>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};
