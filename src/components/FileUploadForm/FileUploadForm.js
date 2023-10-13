import { useState } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

export const FileUploadForm = () => {
	const [fileUpload, setFileUpload] = useState(null);

	const VisuallyHiddenInput = styled("input")({
		clip: "rect(0 0 0 0)",
		clipPath: "inset(50%)",
		height: 1,
		overflow: "hidden",
		position: "absolute",
		bottom: 0,
		left: 0,
		whiteSpace: "nowrap",
		width: 1,
	});

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
		<Button
			component="label"
			variant="contained"
			startIcon={<CloudUpload />}
			onClick={uploadFile}
		>
			Upload file
			<VisuallyHiddenInput
				type="file"
				onChange={(e) => setFileUpload(e.target.files[0])}
			/>
		</Button>
	);
};
