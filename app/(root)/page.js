import Hero from "@components/Home/Hero";
import Impact from "@components/Home/Impact";
import Scroll from "@components/Home/Scroll.js";
import Vision from "@components/Home/Vision";
import What from "@components/Home/What";

function Home() {
  return (
    <div>
      <Hero />
      <Scroll />
      <What />
      <Impact />
      <Vision />
    </div>
  );
}

export default Home;
