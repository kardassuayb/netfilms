import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="contain fluid bg-gradient-to-t from-black-80 to-transparent ">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#fafafa]"
        >
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className="flex gap-12 text-[#fafafa] font-bold tracking-wider">
          <Link
            className="hover:text-[#fafafab4] transition-all duration-300 ease-out"
            href="/movies"
          >
            MOVIES
          </Link>
          <Link
            className="hover:text-[#fafafab4] transition-all duration-300 ease-out"
            href="/series"
          >
            SERIES
          </Link>
          <Link
            className="hover:text-[#fafafab4] transition-all duration-300 ease-out"
            href="/kids"
          >
            KIDS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
