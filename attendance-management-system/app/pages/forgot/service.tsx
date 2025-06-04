import axios from "axios";
import { toast } from "react-toastify";

export class ForgotService {
    async sendForgotPasswordEmail(email: string) {
        try {
            const res = await axios.post('/api/auth/forgot-password', { email });
            if (res.status === 200) {
                toast.success('Email has been sent!');
            } else {
                toast.error(res.data?.message || 'Something went wrong!');
            }
        }
        catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || 'Something went wrong!');
            } else if (error.request) {
                toast.error('Network error. Please try again.');
            } else {
                toast.error('An unexpected error occurred.');
            }
        }
    }
}
