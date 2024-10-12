import { Card, CardContent, CardDescription, CardTitle } from 'keep-react'
import { Star } from 'phosphor-react';

export type TReview = {
    _id: string;
    name: string;
    rating: number; // Assuming rating is out of 5
    comment: string;
};

export default function ReviewCard({ review }: { review: TReview }) {
    const stars = Array(review.rating).fill(0);
    return (
        <Card className="max-w-md">
            <CardContent className='space-y-3'>
                <CardDescription className='text-xl'>
                    {review.comment}
                </CardDescription>
                <div className='flex gap-2'>
                    {
                        stars.map((_star, index) => (
                            <Star size={22} key={index} color="#daca1e" weight="fill" />
                        ))
                    }
                </div>
                <CardTitle>{review.name}</CardTitle>
            </CardContent>
        </Card>
    )
}
