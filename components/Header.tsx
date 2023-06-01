import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import headerStyles from "./header.module.scss";

function Header() {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState("Song title");

	const handleClick = () => {
		setIsEditing(true);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const submitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setIsEditing(false);
		}
	};

	const submitBackground = () => {
		setIsEditing(false);
	};

	return (
		<div>
			{isEditing ? (
				<div className={headerStyles.titleInput}>
					<input
						type="text"
						value={title}
						onChange={handleInputChange}
						onKeyDown={(e) => submitEnter(e)}
						onBlur={() => submitBackground()}
					/>
				</div>
			) : (
				<h1 className={headerStyles.title} onClick={handleClick}>
					{title}
				</h1>
			)}
			<h2 className={headerStyles.author}>The author</h2>
		</div>
	);
}

export default Header;
