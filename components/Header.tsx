import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import headerStyles from "./header.module.scss";

function Header() {
	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [title, setTitle] = useState("Song title");
	const [author, setAuthor] = useState("The author");
	const [isEditingAuthor, setIsEditingAuthor] = useState(false);

	const handleClickTitle = () => {
		setIsEditingTitle(true);
	};

	const handleClickAuthor = () => {
		setIsEditingAuthor(true);
	};

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAuthor(e.target.value);
	};

	const submitTitleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setIsEditingTitle(false);
		}
	};

	const submitAuthorEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setIsEditingAuthor(false);
		}
	};

	const submitBackgroundTitle = () => {
		setIsEditingTitle(false);
	};

	const submitBackgroundAuthor = () => {
		setIsEditingAuthor(false);
	};

	return (
		<div className="header">
			{isEditingTitle ? (
				<div className={headerStyles.titleInput}>
					<input
						type="text"
						value={title}
						onChange={handleTitleChange}
						onKeyDown={(e) => submitTitleEnter(e)}
						onBlur={() => submitBackgroundTitle()}
					/>
				</div>
			) : (
				<h1 className={headerStyles.title} onClick={handleClickTitle}>
					{title}
				</h1>
			)}
			{isEditingAuthor ? (
				<div className={headerStyles.authorInput}>
					<input
						type="text"
						value={author}
						onChange={handleAuthorChange}
						onKeyDown={(e) => submitAuthorEnter(e)}
						onBlur={() => submitBackgroundAuthor()}
					/>
				</div>
			) : (
				<h2 className={headerStyles.author} onClick={handleClickAuthor}>
					{author}
				</h2>
			)}
		</div>
	);
}

export default Header;
