import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "350px",
  color: "#fff",
  justyContent: "center",
  textAlign: "center",
  background: "#364d79",
  padding: "20px",
};

const App = () => (
  <Carousel autoplay className="p-20  rounded bg-[#FFECC1]">
    <div>
      <div style={contentStyle}>
        <h3>Slide 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit magna sit amet justo varius, id volutpat nulla dictum.
          Vestibulum vestibulum tristique velit nec dignissim.
        </p>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <h3>Slide 2</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <h3>Slide 3</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
      </div>
    </div>
  </Carousel>
);

export default App;
