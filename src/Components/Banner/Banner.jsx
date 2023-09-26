const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[85vh]"
        style={{
          backgroundImage: "url(./images/volunteer.avif)",
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center mt-8">
              <div className="input-group w-full max-w-xs text-black">
                <input
                  type="text"
                  placeholder="Search here…"
                  className="input input-bordered"
                />
                <button  className="btn text-white bg-red-500 border-red-500 hover:bg-red-500 text-white border-red-500  w-20">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
