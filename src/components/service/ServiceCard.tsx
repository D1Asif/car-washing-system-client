import { Button, Card, CardContent, CardDescription, CardTitle } from "keep-react";

export type TService = {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
    tags: string[];
}

export default function ServiceCard({ service }: {service: TService}) {
    return (
        <Card className="max-w-full">
            <CardContent className="space-y-4">
                <CardTitle>{service.name}</CardTitle>
                <CardDescription className="text-xl">
                    {service.description}
                </CardDescription>
                <p className='text-xl font-semibold'>${service.price}</p>
                <Button>See Details</Button>
            </CardContent>
        </Card>
    )
}
