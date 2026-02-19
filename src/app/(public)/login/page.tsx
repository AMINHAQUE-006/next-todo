import LoginPage from "@/components/auth/login/LoginPage";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Login',
  description: 'Login with your Account',
}


const page = () => {
  return <LoginPage />;
};
export default page;



