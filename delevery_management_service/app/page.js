"use client"
import Head from 'next/head';
import HomePage from './Home/page';
import Navbar from '../components/NavigationBar/navigation';
import LoginPage from '@/app/Login/page';
import RegisterPage from '@/app/Register/page';
import PostOrderPage from './PostOrder/page';
import Profile from '@/components/Profile/profile';
import profileData from '@/DATA/profileData';

function MyApp() {
  return (
      
    <>
    
     {/* <div className="container mx-auto px-4 py-8">
       <Profile {...profileData} />
     </div> */}
    
    <div className="min-h-screen">
      <main>
      <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Delivery Management Service</title>
      </Head>
      <div className="text-5xl font-bold text-center">
        Making Delivery Management Service
      </div>
    </div>
      </main>
    </div>
    
    </>
  );
}

export default MyApp;
