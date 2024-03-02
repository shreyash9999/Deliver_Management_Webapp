"use client"
import Head from 'next/head';
import Navbar from '../components/NavigationBar/navigation';
import LoginPage from '@/components/Login/Register/login';
import RegisterPage from '@/components/Login/Register/register';

function MyApp() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
      <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Making Delivery Management Service</title>
      </Head>
      <div className="text-5xl font-bold text-center">
        Making Delivery Management Service
      </div>
    </div>
      </main>
    </div>
  );
}

export default MyApp;
