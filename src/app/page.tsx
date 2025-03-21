
'use client';

import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      {/* Logo */}
      <Image src="/logo.jpg" alt="Time Delivery Logo" width={180} height={180} className="mb-6 rounded-lg shadow-lg" />
      
      {/* Title and Description */}
      <h1 className="text-3xl font-bold mb-3">Get Our App</h1>
      <p className="text-lg text-center max-w-md mb-6">Download the APK or contact us on WhatsApp for more information.</p>
      
      {/* Buttons Section */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {/* APK Download Button */}
        <a 
          href="/time-delivery.apk" 
          download 
          className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl shadow-md transition duration-300"

        >
          📥 Download APK
        </a>
        
        {/* WhatsApp Contact Button */}
        <Link href="https://wa.me/21624710702" target="_blank"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white text-center py-3 rounded-xl shadow-md transition duration-300">
          💬 Contact on WhatsApp
        </Link>
      </div>
    </div>
  );
};

export default Home;



