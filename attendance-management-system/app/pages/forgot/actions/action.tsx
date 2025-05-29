
export const handleSubmit = async (values: { email: string }) => {
    const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
    });


};
