import ReviewCard from "./ReviewCard";


export default function ReviewList() {
    const reviews = [
        {
            _id: "1",
            name: "John Doe",
            rating: 5,
            comment: "Amazing service! Highly recommended."
        },
        {
            _id: "2",
            name: "Jane Smith",
            rating: 4,
            comment: "Good experience overall, but a bit expensive.",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                reviews.map((review) => (
                    <ReviewCard review={review} key={review._id} />
                ))
            }
        </div>
    )
}
