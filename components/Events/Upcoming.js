"use client";

function Upcoming() {
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500"];

  return (
    <div>
      <div className="bg-amber-100">
        <div className="text-center text-black text-6xl font-black font-sans uppercase leading-10 tracking-widest p-20">
          Upcoming Events
        </div>
        <div className="p-10">
          <div className="flex flex-col items-center">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-full h-48 my-4 rounded-lg shadow-lg ${color}`}
              ></div>
            ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Upcoming;
