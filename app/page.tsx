import Navbar from "./components/navbar";
import HeroSection from "./components/Heri";
import Body from "./components/body";
import { Store } from "./components/store";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Body />
      <Store />
      <Footer />
    </main>
      );
}
