import { StarIcon } from "@heroicons/react/24/solid";

function Reviews() {
  const reviews = [
    { name: "John Doe", rating: 5, text: "Very good experience...", date: "25th Mar." },
    // Add more sample data
  ];
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.name} className="bg-white shadow-md p-4 rounded-md">
            <h4 className="text-gray-700 font-semibold">{review.name}</h4>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(review.rating)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-yellow-500" />)}
            </div>
            <p className="text-gray-600 mb-2">{review.text}</p>
            <p className="text-gray-500 text-sm">{review.date}</p>
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-500 hover:underline block text-right">View all</a>
    </div>
  );
}

export default Reviews;