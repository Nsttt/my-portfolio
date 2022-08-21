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
          ? 'translate-x-0 opacity-100 transition-opacity duration-300 '
          : 'translate-x-full opacity-0 transition-all delay-100 '
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 translate-x-0 bg-deep-purple/75 opacity-100" />
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20">
          <div className="pointer-events-auto relative w-screen max-w-md">
            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" />
            <div className="flex h-full flex-col overflow-y-scroll bg-light-purple py-6 shadow-xl">
              <div className="flex px-4 sm:px-6">
                <button
                  type="button"
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-very-bright-pink"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                </button>
                <h2 className="ml-6 font-bebas text-4xl">
                  <span className="text-bright-pink">NST</span>
                  Lopez
                </h2>
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
              <div className="flex justify-between">
                <a
                  className="mx-10"
                  href="https://twitter.com/nstlopez"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-white"
                  >
                    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765a9.286 9.286 0 0 1-5.032-1.475 6.605 6.605 0 0 0 4.86-1.359 3.285 3.285 0 0 1-3.066-2.28 3.3 3.3 0 0 0 1.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 3.289 0 0 1 5.612 6.6a9.32 9.32 0 0 0 6.766 3.43 3.286 3.286 0 0 1 5.594-2.993 6.583 6.583 0 0 0 2.086-.796 3.296 3.296 0 0 1-1.443 1.816A6.578 6.578 0 0 0 20.5 7.54a6.66 6.66 0 0 1-1.639 1.697z" />
                  </svg>
                </a>
                <a
                  className="mx-10"
                  href="https://linkedin.com/in/nstlopez"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-white"
                  >
                    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                  </svg>
                </a>
                <a
                  className="mx-10"
                  href="https://github.com/nsttt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-white"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
