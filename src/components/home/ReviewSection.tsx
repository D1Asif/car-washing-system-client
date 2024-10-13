import { Button, Rating, RatingStar, Textarea } from "keep-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReviewList from "../reviews/ReviewList";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";


export default function ReviewSection() {
    const token = useAppSelector(useCurrentToken);
    const [isReviewGiven, setIsReviewGiven] = useState(false);
    const [comment, setComment] = useState("");
    const reviewRef = useRef<HTMLDivElement | null>(null);

    const handleRating = (value: number | undefined) => {
        console.log(value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsReviewGiven(true)
    }

    useEffect(() => {
        if (location.hash === "#review") {
            if (reviewRef.current) {
                reviewRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

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
                        <Rating handleRating={handleRating} className="mx-auto">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <RatingStar value={rating} key={rating}></RatingStar>
                            ))}
                        </Rating>
                        <Textarea 
                            onChange={(e) => {setComment(e.target.value)}}
                            value={comment}
                            placeholder="Write your message here." rows={4}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                ) : (
                    <ReviewList />
                )
            }

        </div>
    )
}
