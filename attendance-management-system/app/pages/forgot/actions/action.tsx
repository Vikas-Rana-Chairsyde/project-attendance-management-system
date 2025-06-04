import { toast } from 'react-toastify';
//TODO : - Add this in the service files by using classes
export const handleSubmit = async (values: { email: string }) => {
    try {
        const res = await fetch('/api/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: values.email }),
        });

        if (res.ok) {
            toast.success('Email has been sent!');
        } else {
            const data = await res.json();
            toast.error(data.message || 'Something went wrong!');
        }
    } catch (error) {
        toast.error('Network error. Please try again.');
    }
};


