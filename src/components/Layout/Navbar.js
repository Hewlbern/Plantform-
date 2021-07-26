/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Signup", href: "signup" },
  // { name: 'Pricing', href: '#' },
  // { name: 'Docs', href: '#' },
  // { name: 'Company', href: '#' },
];

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-green-400">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a>
                <span className="sr-only">Plantform</span>
                <img
                  className="h-10 w-auto"
                  src="/static/example_photos/fullheaderlogo.png"
                  alt=""
                />
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-green-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="/example">
              <a className="inline-block bg-green-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
See our Demo              </a>
            </Link>
            <Link href="/about">
              <a className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-green-600 hover:bg-green-50">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                
                className="text-base font-medium text-white hover:text-green-50"
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
