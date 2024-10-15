import { Button, Rating, RatingStar, Textarea, toast } from "keep-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReviewList from "../reviews/ReviewList";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useCreateReviewMutation, useGetAllReviewsQuery } from "../../redux/features/review/reviewApi";
import { ArrowRight } from "phosphor-react";


export default function ReviewSection() {
    const token = useAppSelector(useCurrentToken);
    const user = useAppSelector(selectCurrentUser);
    const [isReviewGiven, setIsReviewGiven] = useState(false);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number | undefined>();
    const reviewRef = useRef<HTMLDivElement | null>(null);

    const [createReview, { isError }] = useCreateReviewMutation();
    const { data } = useGetAllReviewsQuery(undefined);

    const reviews = data?.data?.slice(0, 2);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!rating) {
            return toast.error("Rating is Required");
        }
        if (!comment) {
            return toast.error("Comment is required")
        }

        const body = {
            user: user?._id,
            rating,
            comment
        }

        createReview(body);

        setIsReviewGiven(true);
    }

    useEffect(() => {
        if (location.hash === "#review") {
            if (reviewRef.current) {
                reviewRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong")
        }
    }, [isError])

    return (
        <div>
            <h3 className="text-heading-5 font-semibold mb-6" ref={reviewRef}>Reviews</h3>
            {
                !isReviewGiven ? (
                    <form
                        className="flex flex-col items-center justify-center gap-5 mx-auto max-w-[500px] border rounded-xl p-6 relative"
                        onSubmit={handleSubmit}
                    >
                        {!token && (
                            <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 rounded-xl bg-black/40">
                                <Link to="/login?redirect=review">
                                    <Button size="lg">Login</Button>
                                </Link>
                            </div>
                        )}
                        <h4 className="text-heading-6 font-semibold text-center">Send us a Review!</h4>
                        <Rating handleRating={(value) => setRating(value)} className="mx-auto">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <RatingStar value={rating} key={rating}></RatingStar>
                            ))}
                        </Rating>
                        <Textarea
                            onChange={(e) => { setComment(e.target.value) }}
                            value={comment}
                            placeholder="Write your message here." rows={4}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                ) : (
                    <ReviewList reviews={reviews} />
                )
            }
            <div className="flex justify-center mt-6">
                <Button>
                    <Link to="/reviews">See all Reviews</Link>
                    <ArrowRight weight="bold" className="ml-3" />
                </Button>
            </div>
        </div>
    )
}
