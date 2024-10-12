import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label } from 'keep-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod';

const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    address: z.string().min(1, "Address is required"),
    phone: z.string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number can't exceed 15 digits"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
    const [formData, setFormData] = useState<SignupFormData>({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof SignupFormData, string>>>({});
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({}); // Reset errors before validation

        // Validate form data
        const result = signupSchema.safeParse(formData);

        if (result.success) {
            try {
                setIsSubmitting(true); // Disable the form while submitting

                // Adding the user role
                const requestBody = {
                    ...formData,
                    role: 'user',
                };

                // the API request
                const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                // Handle the response
                if (response.ok) {
                    const data = await response.json();
                    console.log("Signup successful:", data);

                    navigate("/login");
                } else {
                    const errorData = await response.json();
                    console.error("Signup failed:", errorData);
                    // Show a general error message on failure
                    setGeneralError("Signup failed. Please try again later.");
                }
            } catch (error) {
                console.error("Network error:", error);
                setGeneralError("An error occurred. Please check your network connection and try again.");
            } finally {
                setIsSubmitting(false); // Re-enable the form
            }

        } else {
            const newErrors: Partial<Record<keyof SignupFormData, string>> = {};
            result.error.errors.forEach((error) => {
                newErrors[error.path[0] as keyof SignupFormData] = error.message;
            });
            setErrors(newErrors);
        }
    };

    return (
        <Card className="max-w-md">
            <CardContent className="space-y-3">
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Already have an account? {" "}
                        <Link to="/signup" className='text-primary-400'>
                            Log in
                        </Link>
                    </CardDescription>
                </CardHeader>
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <fieldset className="space-y-1">
                        <Label htmlFor="name">Name*</Label>
                        <div className="relative">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="email">Email*</Label>
                        <div className="relative">
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="password">Password*</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="phone">Phone*</Label>
                        <div className="relative">
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="address">Address*</Label>
                        <div className="relative">
                            <Input
                                id="address"
                                type="text"
                                placeholder="Enter address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <p className="text-red-500">{errors.address}</p>}
                        </div>
                    </fieldset>

                    {generalError && (
                        <p className="text-red-500">{generalError}</p> // Display the general error message
                    )}

                    <Button type="submit" className="!mt-3 block w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
