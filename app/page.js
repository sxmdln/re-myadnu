"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Footer from "@/components/Footer";

const keyIcon = (
  <FontAwesomeIcon icon={faKey} size="xs" style={{ color: "#9f9f9f" }} />
);
const userIcon = (
  <FontAwesomeIcon icon={faUser} size="xs" style={{ color: "#9f9f9f" }} />
);
const googleIcon = (
  <FontAwesomeIcon icon={faGoogle} size="lg" style={{ color: "white" }} />
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <NavigationBar />
        <Login />
        <Footer />
      </div>
    </main>
  );
}

const NavigationBar = () => {
  return (
    <div className="flex flex-row bg-blue justify-between items-center px-12 py-3">
      <Link href="/" className="title text-white">
        <span className="italic">my</span>ADNU
      </Link>
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      {/* logo */}
      <Image src="/images/logo.png" alt="" width="180" height="180" />

      <h1 className="welcome pt-3 text-blue">Welcome to myADNU</h1>
      <GoogleButton />

      <h3 className="m-5">or</h3>

      {/* formfields */}
      <LoginForm />
      <RememberMe />
      {/* button */}
      <SubmitButton />
    </div>
  );
};

function GoogleButton() {
  return (
    <button className="bg-red text-white rounded-md px-4 py-4 mt-4 w-72">
      <div className="wrapper">
        <div className="googleIcon h-6 w-6 p-1 absolute border-box">
          {googleIcon}
        </div>
        <p className=" pl-7 font-medium">Sign in with ADNU GBOX</p>
      </div>
    </button>
  );
}

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col items-start mt-1">
      <div className="wrapper">
        <div className="userIcon h-6 w-6 p-1 absolute border-box top-0.5 left-0.5">
          {userIcon}
        </div>
        <input
          type="text"
          placeholder="Name"
          className="border border-lightgray rounded-md py-2 px-2 mt-2 min-w-72 pl-7"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="wrapper">
        <div className="keyIcon h-6 w-6 p-1 absolute border-box top-12 left-0.5">
          {keyIcon}
        </div>
        <input
          type="text"
          placeholder="Password"
          className="border border-lightgray rounded-md py-2 px-2 mt-2 min-w-72 pl-7"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </form>
  );
}

function RememberMe() {
  return (
    <div className="flex flex-nowrap items-center mt-2 -ml-36 pt-1 pb-4">
      <input type="checkbox" className="mr-2" />
      <p>Remember me</p>
    </div>
  );
}

function SubmitButton() {
  return (
    <Link href="/dashboard">
      <button className="bg-lightblue text-white font-medium rounded-md px-4 py-2 mt-2 w-72">
        Sign in
      </button>
    </Link>
  );
}
