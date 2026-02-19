import DashboardPage from '@/components/dashboard/DashboardPage';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Watch your stats',
}


const page = () => {
  return <DashboardPage />;
};
export default page;



