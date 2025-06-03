import axios from 'axios';

export class PasswordResetService {
  constructor(
    private setMessage: (msg: string) => void,
    private router: any 
  ) {}

  async resetPassword(
    token: string,
    values: { password: string; password2: string }
  ) {
    try {
      const res = await axios.post('/api/auth/reset-password', {
        token,
        newPassword: values.password,
        confirmPassword: values.password2,
      });

      this.setMessage('Password reset successful. Redirecting to login...');
      setTimeout(() => {
        this.router.push('/pages/signin');
      }, 1000);
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'Something went wrong!';
      this.setMessage(`Reset failed: ${message}`);
    }
  }
}
