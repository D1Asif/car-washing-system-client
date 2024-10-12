import { Button, Rating, RatingStar, Textarea } from "keep-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReviewList from "../reviews/ReviewList";


export default function ReviewSection() {
    const isLoggedIn = false;
    const [isReviewGiven, setIsReviewGiven] = useState(false)

    const handleRating = (value: number | undefined) => {
        console.log(value);

        setIsReviewGiven(true)
    }

    return (
        <div>
            <h3 className="text-heading-5 font-semibold mb-6" id="review">Reviews</h3>
            {
                !isReviewGiven ? (
                    <form 
                        className="flex flex-col items-center justify-center gap-5 mx-auto max-w-[500px] border rounded-xl p-6 relative"
                    >
                        {!isLoggedIn && (
                            <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 rounded-xl bg-black/40">
                                <Link to="/login">
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
                        <Textarea placeholder="Write your message here." rows={4} />
                        <Button type="submit">Submit</Button>
                    </form>
                ) : (
                    <ReviewList />
                )
            }

        </div>
    )
}
