import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import useIsOnline from "./utils/useIsOnline";
import IsOnline from "./components/common/IsOnline";

const App = () => {
	const isOnline = useIsOnline();

	return !isOnline ? (
		<IsOnline />
	) : (
		<div className="App">
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
