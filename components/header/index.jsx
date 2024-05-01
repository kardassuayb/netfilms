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
          <Link href="/movies">MOVIES</Link>
          <Link href="/series">SERIES</Link>
          <Link href="/kids">KIDS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
