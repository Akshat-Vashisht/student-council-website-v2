import React from "react";

function Button(width) {
  return (
    <div>
      <button
        className={`justify-center items-center px-16 py-1.5 mt-8  text-white whitespace-nowrap bg-stone-950 rounded-[36px] tracking-[2px] w-${width} max-md:px-5`}
      >
        LEARN MORE
      </button>
    </div>
  );
}

export default Button;
