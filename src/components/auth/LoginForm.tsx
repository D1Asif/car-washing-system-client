import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label } from 'keep-react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    // Handle form submission with API request
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({}); // Reset field errors before validation
        setGeneralError(null); // Reset general error

        // Validate form data
        const result = loginSchema.safeParse(formData);

        if (result.success) {
            console.log(formData);
            // try {
            //     setIsSubmitting(true); // Disable the form while submitting

            //     // Make the API POST request
            //     const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(formData),
            //     });

            //     // Handle the response
            //     if (response.ok) {
            //         const data = await response.json();
            //         console.log("Login successful:", data);
            //         // Redirect or handle success response here
            //     } else {
            //         const errorData = await response.json();
            //         console.error("Login failed:", errorData);
            //         // Show a general error message on failure
            //         setGeneralError("Login failed. Please check your credentials and try again.");
            //     }
            // } catch (error) {
            //     console.error("Network error:", error);
            //     setGeneralError("An error occurred. Please check your network connection and try again.");
            // } finally {
            //     setIsSubmitting(false); // Re-enable the form
            // }
        } else {
            // Set validation errors if validation fails
            const newErrors: Partial<Record<keyof LoginFormData, string>> = {};
            result.error.errors.forEach((error) => {
                newErrors[error.path[0] as keyof LoginFormData] = error.message;
            });
            setErrors(newErrors);
        }
    };

    return (
        <Card className="max-w-md">
            <CardContent className="space-y-3">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Don&apos;t have an account? {" "}
                        <Link to="/signup" className="text-primary-400">
                            Sign up
                        </Link>
                    </CardDescription>
                </CardHeader>
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <fieldset className="space-y-1">
                        <Label htmlFor="email">Email*</Label>
                        <div className="relative">
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                    </fieldset>

                    {generalError && (
                        <p className="text-red-500">{generalError}</p> // Display the general error message
                    )}

                    <Button type="submit" className="!mt-3 block w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
