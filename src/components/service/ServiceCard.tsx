import { Badge, Button, Card, CardContent, CardDescription, CardTitle } from "keep-react";
import { Link } from "react-router-dom";

export type TService = {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
    tags: string[];
}

export default function ServiceCard({ service }: { service: TService }) {
    return (
        <Card className="max-w-full">
            <CardContent className="space-y-4">
                {service?.tags?.length > 0 && (
                    <Badge color="warning" className="text-black">
                        {service.tags[0]?.charAt(0).toLocaleUpperCase() + service.tags[0].substring(1)}
                    </Badge>
                )}
                <CardTitle>{service.name}</CardTitle>
                <CardDescription className="text-xl">
                    {service.description}
                </CardDescription>
                <p className='text-xl font-semibold'>${service.price}</p>
                <Button>
                    <Link to={`/services/${service._id}`}>
                        See Details
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
