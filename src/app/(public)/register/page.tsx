import RegisterPage from '@/components/auth/register/RegisterPage';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Register',
  description: 'Create new Account',
}


const page = () => {
  return <RegisterPage />;
};
export default page;



