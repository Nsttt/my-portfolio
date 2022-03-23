import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex h-screen flex-col justify-center align-middle">
        <h1 className="text-center font-bebas text-7xl">
          Not <span className="text-bright-pink">found</span>
          &nbsp;:(
        </h1>
        <Link href="/">
          <a className="group relative mt-2 mr-2 inline-flex cursor-pointer items-center justify-center self-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-very-bright-pink p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:ring-4 focus:ring-pink-200 group-hover:from-purple-500 group-hover:to-very-bright-pink dark:text-white dark:focus:ring-pink-800">
            <span className="relative rounded-md bg-gray-900 py-2.5 px-5 transition-all duration-75 ease-in group-hover:bg-gray-900/0">
              Go back
            </span>
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
