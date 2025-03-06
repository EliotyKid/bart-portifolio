import Consortium from "./components/Consortium";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import LastPublishhed from "./components/LastPublished";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Consortium/>
      <LastPublishhed/>
      <FAQ/>
    </div>
  );
}
