const IsOnline = () => {
	return (
		<div className="bg-red-500 text-white p-3 fixed top-0 w-full z-50 text-center transition-opacity duration-300">
			<p>No internet connection. Please check your connection and try again.</p>
		</div>
	);
};

export default IsOnline;
