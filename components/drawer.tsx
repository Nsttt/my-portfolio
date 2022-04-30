import Link from 'next/link';

interface DrawerProps {
  isOpen: boolean;
  close: () => void;
}

export const Drawer = ({ isOpen, close }: DrawerProps) => {
  return (
    <div
      className={`fixed inset-0 z-10 overflow-hidden ease-in-out ${
        isOpen
          ? ' transition-opacity opacity-100 duration-300 translate-x-0 '
          : ' transition-all delay-100 opacity-0 translate-x-full '
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 translate-x-0 bg-deep-purple/75 opacity-100" />
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20">
          <div className="pointer-events-auto relative w-screen max-w-md">
            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" />
            <div className="flex h-full flex-col overflow-y-scroll bg-light-purple py-6 shadow-xl">
              <div className="px-4 sm:px-6">
                <button
                  type="button"
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={close}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                <div className="absolute inset-0 px-4 sm:px-6">
                  <div className="flex h-full flex-col p-4">
                    <Link href="/">
                      <a className="my-4 text-3xl">Home</a>
                    </Link>
                    <Link href="/portfolio">
                      <a className="my-4 text-3xl">Portfolio</a>
                    </Link>
                    <Link href="/blog">
                      <a className="my-4 text-3xl">Blog</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
