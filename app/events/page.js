import CarouselComponent from "@components/Events/Carousel";
import Upcoming from "@components/Events/Upcoming";
import Previous from "@components/Events/Previous";

function page() {
  return (
    <div>
      <CarouselComponent />
      <Upcoming />
      <Previous />
    </div>
  );
}

export default page;
