import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-blue justify-between items-center px-12 py-3">
      <Link href="/" className="title text-white">
        <span className="italic">my</span>ADNU
      </Link>

      {/* <nav className="font-semibold">
        <Link href="/" className="text-white ">
          Login
        </Link>
      </nav> */}
    </div>
  );
};

export default Navbar;
