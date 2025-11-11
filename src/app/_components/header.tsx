import Link from "next/link";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-sky-200 dark:border-sky-800 shadow-sm">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="flex items-center py-4">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            <span className="text-gradient hover:scale-105 transition-transform duration-300 inline-block">
              PactSpy
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
