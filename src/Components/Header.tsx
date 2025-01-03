import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image
        src={"logo.png"}
        alt="logo"
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
       
      />
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      
      <span className="ml-3 text-xl">Malik Aman</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/About" className="mr-5 hover:text-gray-900">About</Link>
      <Link href='/ContactUs' className="mr-5 hover:text-gray-900">Contact us</Link>
      
    </nav>
    <div>
      <Link href='/#' className="mr-5 hover:text-gray-900">Sign In</Link>
      <Link href='/#' className="mr-5 hover:text-gray-900">Sign Up</Link>
    </div>
    
  </div>
</header>

    </div>
  );
}

export default Header