import React from "react";

const GameSlider = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4  md:gap-8 justify-center items-center p-2">
      <div>
        <img src="./images/gm-slide-1.png" alt="game" />
      </div>
      <div>
        <img src="./images/gm-slide-2.png" alt="game" />
      </div>
      <div>
        <img src="./images/gm-slide-3.png" alt="game" />
      </div>
      <div>
        <img src="./images/gm-slide-4.png" alt="game" />
      </div>
      <div>
        <img src="./images/gm-slide-5.png" alt="game" />
      </div>
    </div>
  );
};

export default GameSlider;
