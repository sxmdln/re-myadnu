import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faBarsIcon = (
  <FontAwesomeIcon
    icon={faBars}
    className="show-sidebar-icon h-7"
    style={{ color: "#ffffff" }}
  />
);

const TopNavbar = () => {
  return (
    <div className="top-navbar flex flex-row bg-blue justify-between items-center px-12 py-3">
      <Link href="/dashboard" className="top-navbar-title title text-white text-2xl">
        <span className=" italic">my</span>ADNU
      </Link>
      <Link href=""> {faBarsIcon} </Link>
      <nav className="font-medium text-md py-3">
        <Link href="/" className="text-white ">
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default TopNavbar;
