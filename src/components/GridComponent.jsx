import React from "react";

const GridComponent = ({ name, category, url, tech, link, code, images }) => {
  return (
    <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-textColor uppercase font-tusker tracking-wide text-5xl md:text-8xl">
          {name}
        </h1>
        <p className="text-textColor uppercase text-xl md:text-2xl font-montserat mt-3 md:mt-5">
          {category}
        </p>
      </div>

      <div className="relative group w-full flex justify-center">
        <div className="w-[400px] md:w-[600px] h-[220px] md:h-[350px] rounded-2xl overflow-hidden relative shadow-none md:shadow-lg">
          <img
            className="w-full h-full object-cover md:object-fill transition-opacity duration-300 group-hover:opacity-50 rounded-xl"
            src={url}
            alt={name}
          />

          <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {/* Buttons Section */}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="bg-white font-montserat text-xs md:text-sm px-4 py-2 md:px-8 md:py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
                  >
                    <img
                      src={img}
                      alt=""
                      className=" w-[15px] h-[15px] md:w-[25px] md:h-[25px] hover:scale-125"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
