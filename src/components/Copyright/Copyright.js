import { Link, Typography } from "@mui/material";

export const Copyright = () => {
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
