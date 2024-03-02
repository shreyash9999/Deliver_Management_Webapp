import Link from 'next/link';


const Navbar = () => {
    
  return (
    <>
    <nav className="bg-gray-500 flex items-center justify-between px-4 py-2 fixed top-0 w-full z-50">
      <Link legacyBehavior href="/">
        <a className="text-white text-xl font-bold">Delivery Management Service</a>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link legacyBehavior href="/">
            <a className="text-white hover:text-gray-400">Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/postOrder">
            <a className="text-white hover:text-gray-400">Post Order</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a className="text-white hover:text-gray-400">About</a>
          </Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Link legacyBehavior href="/login">
          <a className="text-white px-2 py-1 bg-blue-500 hover:bg-blue-700 rounded mr-2">Login</a>
        </Link>
        <Link legacyBehavior href="/register">
          <a className="text-white px-2 py-1 bg-green-500 hover:bg-green-700 rounded">Register</a>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2v13h4l1-1H3v-10zM7 1a1 1 0 000 2v11a1 1 0 102 0v-11a1 1 0 00-2 0zM11 1a1 1 0 000 2v5h4l1-1h-4v-5a1 1 0 00-2 0zM15 1a1 1 0 000 2v13h4l-1-1H15v-10a1 1 0 00-2 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zM16 7a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
        </svg>
      </div>
    </nav>
   
    </>
  );
};

export default Navbar;
