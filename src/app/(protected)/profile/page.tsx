import ProfilePage from '@/components/profile/ProfilePage';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Watch your stats',
}


const page = () => {
  return <ProfilePage />;
};
export default page;



