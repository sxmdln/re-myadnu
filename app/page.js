import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <Navbar /> 
        <Login />
        <Footer />
      </div>
    </main>
  );
}
