"use client"
import Head from 'next/head';
import HomePage from './Home/page';
import Navbar from '../components/NavigationBar/navigation';
import LoginPage from '@/app/Login/page';
import RegisterPage from '@/app/Register/page';
import PostOrderPage from './PostOrder/page';
import Profile from '@/components/Profile/profile';
import profileData from '@/DATA/profileData';
import OrdersTable from '@/components/Tables/OrdersTable';
import CreateOrder from '@/components/Forms/CreateOrder';

function MyApp() {
  return (
      
    <>
    
     {/* <div className="container mx-auto px-4 py-8">
       <Profile {...profileData} />
     </div> */}
    
    <div className="py-20 h-[80%]">
      <div className='flex flex-row text-center justify-center'><p className='px-10'>Place your order with DMF in KJ's Compus</p> <div className='px-10  text-center justify-center'><button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Place order
      </button>
      </div></div>
    <div>
      <OrdersTable/>
      </div>
    </div>
    
    </>
  );
}

export default MyApp;
