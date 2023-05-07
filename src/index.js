import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardContainer from "./components/cards/CardContainer";
import { Context } from "./context/CartContext";
import LoadingSpinner from "./components/common/LoadingSpinner";

// lazy loding
const CardDetail = lazy(() => import("./components/cards/CardDetail"));
const Cart = lazy(() => import("./components/cards/Cart"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <CardContainer />,
			},
			{
				path: "/card-detail/:id",
				element: (
					<Suspense fallback={<LoadingSpinner />}>
						<CardDetail />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<LoadingSpinner />}>
						<Cart />
					</Suspense>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Context>
			<RouterProvider router={router} />
		</Context>
	</React.StrictMode>
);
