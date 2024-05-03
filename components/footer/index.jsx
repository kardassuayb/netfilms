import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      Made with ❤️ by
      <Link
        target="_blank"
        className="ml-1 hover:text-[#fafafab4]"
        href="https://www.linkedin.com/in/kardassuayb/"
      >
        kardassuayb
      </Link>
    </footer>
  );
};

export default Footer;
