
import Button from './Components/Button'
import Benefits from "./Components/Benefits";
// import Cars from "./Components/Fleet";
import CTA from "./Components/CTA";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Locations from "./Components/Locations";
import Navbar from "./Components/Navbar";
import Process from "./Components/Process";

import Reviews from "./Components/Reviews";
import Fleet from './Components/Fleet';

export default function Home() {

  return (
    <main className="w-full flex flex-col justify-start items-center font-dm-sans">
      <Navbar />
      <Hero />
      <Reviews />
      <Process />
      <Fleet/>
      <Benefits />
      <Locations />
      <CTA />
      <FAQ />
      <Footer />
      <Button iconsize='30' textvisible={false} className='fixed bottom-5 right-5 z-40' />
    </main>

  );
}
