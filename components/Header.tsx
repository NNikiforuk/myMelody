import styles from "./header.module.scss";
import EditibleHeader from "./EditibleHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<div className="header">
			<EditibleHeader
				inputStyle={styles.titleInput}
				headerStyle={styles.title}
				headerLevel={1}
				initialValue="Song title"
			/>
			<FontAwesomeIcon icon={faPenToSquare} className={styles.icon} />
			<EditibleHeader
				inputStyle={styles.authorInput}
				headerStyle={styles.author}
				headerLevel={2}
				initialValue="The author"
			/>
		</div>
	);
}

export default Header;
