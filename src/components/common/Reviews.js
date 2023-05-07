const Reviews = (props) => {
	const { name, rating, comment, date, profileImg } = props.reviewsData;
	console.log(props);
	return (
		<div class="bg-white p-4 rounded-md shadow-md">
			<div class="flex items-center mb-4">
				<div class="w-12 h-12 rounded-full bg-gray-200">
					<img src={profileImg} alt="avtar" />
				</div>
				<div class="ml-4">
					<h2 class="text-lg font-bold">{name}</h2>
					<p class="text-gray-600">{date}</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-green-500 text-white font-bold text-lg">
					{rating}
				</div>
				<p class="text-gray-800">{comment}</p>
			</div>
		</div>
	);
};

export default Reviews;
