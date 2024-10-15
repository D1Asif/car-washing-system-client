import { Spinner } from "keep-react";
import ReviewList from "../components/reviews/ReviewList";
import { useGetAllReviewsQuery } from "../redux/features/review/reviewApi";


export default function ReviewsPage() {
    const { data, isLoading } = useGetAllReviewsQuery(undefined);
    const reviews = data?.data;

    return (
        <div>
            <ReviewList reviews={reviews} />
            {isLoading && (
                <div className="flex justify-center">
                    <Spinner />
                </div>
            )}
        </div>
    )
}
