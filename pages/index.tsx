import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Favicon from "../utils/Favicon";

export default function Home() {
	return (
		<div className="home">
			<Head>
				<Favicon />
					<meta
						name="description"
						content="Write and transpose your piano notes very easy"
					/>
					<title>myMelody</title>
			</Head>
			<Header />
			<Main />
			<Aside />
			<Footer />
		</div>
	);
}
