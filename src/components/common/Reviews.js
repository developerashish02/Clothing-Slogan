const Reviews = (props) => {
	const { name, rating, comment, date, profileImg } = props.reviewsData;

	return (
		<div className="bg-white p-4 rounded-md shadow-md">
			<div className="flex items-center mb-4">
				<div className="w-12 h-12 rounded-full bg-gray-200">
					<img src={profileImg} alt="avtar" className="rounded-full" />
				</div>
				<div className="ml-4">
					<h2 className="text-lg font-bold">{name}</h2>
					<p className="text-gray-600">{date}</p>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-green-500 text-white font-bold text-lg">
					{rating}
				</div>
				<p className="text-gray-800">{comment}</p>
			</div>
		</div>
	);
};

export default Reviews;
