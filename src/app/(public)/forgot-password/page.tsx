import ForgotPasswordPage from '@/components/auth/forgot-password/ForgotPasswordPage';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Reset Your Password',
}


const page = () => {
  return <ForgotPasswordPage />;
};
export default page;



