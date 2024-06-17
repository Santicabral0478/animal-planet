import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NatureOne from "@/components/NatureOne";
import { ShowSect } from "@/components/ShowSect";

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <Banner/>
        <ShowSect/>
        <Blog/>
      </main>
      <Footer/>
    </>
  );
}
