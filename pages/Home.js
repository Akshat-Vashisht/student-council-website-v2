import Hero from "@components/Home/Hero";
import Impact from "@components/Home/Impact";
import Scroll from "@components/Home/Scroll.js";
import What from "@components/Home/What";

function Home() {
  return (
    <div>
      <Hero />
      <Scroll />
      <What />
      <Impact />
    </div>
  );
}

export default Home;
