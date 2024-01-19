import Header from "./components/Header";
import Footer from "./components/Footer";
import UserLayout from "./components/UserLayout";
import { MyContextProvider } from "./components/MyContext";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-svh gap-3">
      <MyContextProvider>
        <Header />
        <UserLayout />
        <Footer />
      </MyContextProvider>
    </div>
  );
}
