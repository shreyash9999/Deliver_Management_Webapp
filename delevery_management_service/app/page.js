import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
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
  );
}
