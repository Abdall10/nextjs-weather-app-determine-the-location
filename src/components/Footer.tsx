
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

export default function Footer() {
    return (
      <>
     <footer className="bg-gray-100">
     <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      <a
        className="inline-block rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
        href="/"
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <a href='/' className="flex justify-center text-blue-600 lg:justify-start">
        <Image 
         src="/logo.svg" 
         alt="Logo" 
         width={118} 
         height={32}  
         className="h-30" 
          />
        </a>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
        Experience the ever-changing skies, from clear and sunny days to the soothing embrace of gentle rains. Whether it is the crisp coolness of autumn breezes or the invigorating warmth of summer sunshine, our weather invites you to explore and enjoy every moment.

        </p>
        <p className="mt-12 text-center text-sm text-gray-500 lg:text-left">
             created by Abdall10
                <Link
                 href={"https://github.com/Abdall10/Weather-app-/blob/main/Introduction.pdf"}
                target="_blank" 
                rel="noopener noreferrer"
                >
                 <FaGithub className="inline-block ml-2" size={16} />
                 </Link>
            </p>
      </div>

     
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2024. All rights reserved.
    </p>
   
  </div>
</footer>
      </>
    );
  }
  
