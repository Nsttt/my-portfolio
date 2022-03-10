import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center h-screen align-middle">
        <h1 className="font-bebas text-7xl text-center">
          Not <span className="text-bright-pink">found</span>
          &nbsp;:(
        </h1>
        <Link href="/">
          <a className="group inline-flex overflow-hidden relative justify-center items-center self-center p-0.5 mt-2 mr-2 text-sm font-medium text-gray-900 hover:text-white dark:text-white bg-gradient-to-br from-purple-500 group-hover:from-purple-500 to-very-bright-pink group-hover:to-very-bright-pink rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 cursor-pointer">
            <span className="relative py-2.5 px-5 bg-gray-900 group-hover:bg-gray-900/0 rounded-md transition-all duration-75 ease-in">
              Go back
            </span>
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
