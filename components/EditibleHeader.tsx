import React, { useState, ChangeEvent, KeyboardEvent } from "react";

type Props = {
	inputStyle: string;
	headerStyle: string;
	headerLevel: number;
	initialValue: string;
};

function EditibleHeader({
	inputStyle,
	headerStyle,
	headerLevel,
	initialValue,
}: Props) {
	const [isEditingText, setIsEditingText] = useState(false);
	const [text, setText] = useState(initialValue);

	const handleClickText = () => {
		setIsEditingText(true);
	};

	const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const submitTextEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setIsEditingText(false);
		}
	};

	const submitBackgroundText = () => {
		setIsEditingText(false);
	};

	if (isEditingText) {
		return (
			<div className={inputStyle}>
				<input
					type="text"
					value={text}
					onChange={handleTextChange}
					onKeyDown={(e) => submitTextEnter(e)}
					onBlur={() => submitBackgroundText()}
				/>
			</div>
		);
	} else {
		if (headerLevel == 1) {
			return (
				<h1 className={headerStyle} onClick={handleClickText}>
					{text}
				</h1>
			);
		} else if (headerLevel == 2) {
			return (
				<h2 className={headerStyle} onClick={handleClickText}>
					{text}
				</h2>
			);
		}
	}
}

export default EditibleHeader;
