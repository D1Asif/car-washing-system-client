import { TUser } from "../../redux/features/auth/authSlice";
import ReviewCard from "./ReviewCard";

export type TReview = {
    _id: string,
    user: TUser,
    rating: number,
    comment: string
}

export default function ReviewList({reviews}: {reviews: TReview[]}) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                reviews?.map((review) => (
                    <ReviewCard review={review} key={review._id} />
                ))
            }
        </div>
    )
}
