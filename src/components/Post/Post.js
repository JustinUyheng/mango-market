import { Box, Divider, Stack, Typography } from "@mui/material";

const item = {
	img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
	title: "Breakfast",
	price: "28,000",
	category: "Women's clothing",
	location: "Banilad, Cebu City, Cebu",
	author: "@bkristastucchio",
	description:
		"I bought it last year and wore it about four or five times in spring and fall! There is some feeling of use! Please note that I am 163cm and 52kg and the fit is just right with a loose fit !",
	interest: 20,
	chats: 10,
	views: 100,
	username: "Krista Stucchio",
	hasBuyer: false,
};

export const Post = () => {
	return (
		<Box width={600}>
			<Stack spacing={2}>
				<Box>
					<img alt="item" src={item.img} width="100%" />
				</Box>
				<Typography align="left">
					Women's Comme des Garçons cardigan genuine
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
					gap={1}
				>
					<Typography variant="subtitle">{item.category}</Typography>
					<Divider orientation="vertical" flexItem />
					<Typography variant="subtitle">10 days ago</Typography>
				</Box>
				<Typography variant="subtitle" align="left">
					100,000 won
				</Typography>
				<Typography align="left">
					I bought it last year and wore it about four or five times in spring
					and fall! There is some feeling of use! Please note that I am 163cm
					and 52kg and the fit is just right with a loose fit !
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
					gap={1}
				>
					<Typography variant="subtitle">Interest {item.interest}</Typography>
					<Divider orientation="vertical" flexItem />
					<Typography variant="subtitle">Chat {item.chats}</Typography>
					<Divider orientation="vertical" flexItem />
					<Typography variant="subtitle">Views {item.views}</Typography>
				</Box>
			</Stack>
		</Box>
	);
};
