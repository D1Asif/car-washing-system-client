import { Card, CardContent, CardDescription, CardTitle } from 'keep-react'
import { Star } from 'phosphor-react';
import { TReview } from './ReviewList';

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
                <CardTitle>{review.user.name}</CardTitle>
            </CardContent>
        </Card>
    )
}
