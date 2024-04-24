const Banner = () => {
  return (
    <div className="py-20">
      <div
        className="hero h-56 md:h-96 rounded-lg"
        style={{
            backgroundImage: "url(src/assets/images/b1.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">CMA Fest</h1>
            <p className="mb-5">
              Make Memories That Will Last A Lifetime. See Your Favourite Artist Live At CMA Fest!  
            </p>
            <button className="btn btn-primary text-white mr-5">Get Ticket</button>
            <button className="btn bg-transparent opacity-50 text-white">Explore All Events</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
