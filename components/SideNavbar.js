import Image from "next/image";
import Link from "next/link";
const SideNavbar = () => {
  return (
    <div className="side-navbar bg-darkgray  fixed min-h-full p-6 max-h-full">
      {/* IMAGE, STUDENT NAME AND COURSE */}
      <div className="side-navbar-content" >
        <center>
          <Image
            src="/images/logo.png"
            className="side-logo"
            width={150}
            height={150}
            alt=""
          />
          <div className="py-3">
            <p className="side-navbar-name text-white max-w-46 text-xs font-medium py-1">
              SAMANTHA MAE L DE LAS NIEVES
            </p>
            <p className="side-navbar-course text-white text-xs">BS INFORMATION TECHNOLOGY</p>
          </div>
        </center>
      </div>
        {/* NAVIGATION LINKS */}
        <div className="side-navbar-items flex flex-col py-2">
            <Link href="/dashboard" className="side-navbar-text text-white text-sm py-3">
                Dashboard
            </Link>
            <Link href="/offerings" className="side-navbar-text text-white text-sm py-3">
                Offerings
            </Link>
            <Link href="/advisement" className="side-navbar-text text-white text-sm py-3">
                My Advisement
            </Link>
            <Link href="/grades" className="side-navbar-text text-white text-sm py-3">
                My Grades
            </Link>
            <Link href="/credited-subjects" className="side-navbar-text text-white text-sm py-3">
                My Credited Subjects
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                My Subjects
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                My Accounts
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                My Matriculation
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                My Scholarship
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                Registrar Services
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                My Library
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                Office of Student Affairs
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                College Guidance Center
            </Link>
            <Link href="#" className="side-navbar-text text-white text-sm py-3">
                Web Enrollment
            </Link>
            </div>

    </div>
  );
};

export default SideNavbar;
