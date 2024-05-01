import CarouselComponent from "@components/Events/Carousel";
import UpcomingEvents from "../../../components/Events/Upcoming";
import PreviousEvents from "../../../components/Events/Previous";

function page() {
  return (
    <div>
      <CarouselComponent />
      <UpcomingEvents />
      <PreviousEvents />
    </div>
  );
}

export default page;
