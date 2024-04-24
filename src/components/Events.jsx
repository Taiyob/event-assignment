import { MdOutlinePlace } from "react-icons/md";

const Events = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <h2 className="text-black font-bold text-6xl">Events</h2>
      </div>
      <div className="mt-5">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 btn btn-outline border-none dark:border-gray-600 dark:text-gray-600"
          >
            <span className="font-bold">All</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 btn btn-outline border-none rounded-t-lg dark:border-gray-600 dark:text-gray-900"
          >
            <span className="font-bold">For You</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 btn btn-outline border-none dark:border-gray-600 dark:text-gray-600"
          >
            <span className="font-bold">This Day</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 btn btn-outline border-none dark:border-gray-600 dark:text-gray-600"
          >
            <span className="font-bold">This Week</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 btn btn-primary border-none dark:border-gray-600 dark:text-gray-600"
          >
            <span className="font-bold">Music</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 btn btn-outline border-none dark:border-gray-600 dark:text-gray-600"
          >
            <span className="font-bold">Union</span>
          </a>
        </div>
      </div>
      <div className="border-2 border-purple-800 mt-5">
        <div
          className="bg-[#003ACF1A]"
          style={{ boxShadow: "2px 2px 48px 0px #003ACF1A" }}
        >
          <div className="flex p-5 gap-20 items-center justify-center">
            <div className="w-1/3">
              <div className="relative">
                <img className="w-full" src="/src/assets/images/e1.png" alt="" />
                <div className="absolute top-1 left-1">
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    online
                  </button>
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    favourite
                  </button>
                </div>
              </div>
              <div className="border-2 border-dashed border-purple-600 mt-5"></div>
              <div className="flex mt-5 gap-5">
                <div className="flex-3">
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    Music
                  </button>
                  <span className="flex items-center">
                    <MdOutlinePlace className="mr-2" />
                    Celebrity Convention Hall
                  </span>
                  <h3 className="text-black font-bold text-3xl">
                    Roufian HSC-24 Rag Day
                  </h3>
                </div>
                <div className="flex-2">
                  <div className="bg-white rounded-lg p-5 text-center">
                    <p className="text-black text-sm">Apr.</p>
                    <p className="text-purple-600 text-3xl">20</p>
                    <p className="text-black text-sm">10:00 am</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-12">
                <button className="btn btn-primary">See Ticket</button>
                <button className="btn bg-white text-black">
                  20 <span className="text-sm">seat left</span>
                </button>
                <button>See More</button>
              </div>
            </div>
            <div className="w-1/3">
              <div className="relative">
                <img className="w-full" src="/src/assets/images/e2.png" alt="" />
                <div className="absolute top-1 left-1 space-x-44">
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    online
                  </button>
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    favourite
                  </button>
                </div>
              </div>
              <div className="border-2 border-dashed border-purple-600 mt-5"></div>
              <div className="flex mt-5 gap-5">
                <div className="flex-3">
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    Music
                  </button>
                  <span className="flex items-center">
                    <MdOutlinePlace className="mr-2" />
                    Celebrity Convention Hall
                  </span>
                  <h3 className="text-black font-bold text-3xl">
                    Roufian HSC-24 Rag Day
                  </h3>
                </div>
                <div className="flex-2">
                  <div className="bg-white rounded-lg p-5 text-center">
                    <p className="text-black text-sm">Apr.</p>
                    <p className="text-purple-600 text-3xl">20</p>
                    <p className="text-black text-sm">10:00 am</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-12">
                <button className="btn btn-primary">See Ticket</button>
                <button className="btn bg-white text-black">
                  20 <span className="text-sm">seat left</span>
                </button>
                <button>See More</button>
              </div>
            </div>
            <div className="w-1/3">
              <div className="relative">
                <img className="w-full" src="/src/assets/images/e3.png" alt="" />
                <div className="absolute top-1 left-1 space-x-44">
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    online
                  </button>
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    favourite
                  </button>
                </div>
              </div>
              <div className="border-2 border-dashed border-purple-600 mt-5"></div>
              <div className="flex mt-5 gap-5">
                <div className="flex-3">
                  <button className="btn btn-sm bg-purple-600 border-none text-white">
                    Music
                  </button>
                  <span className="flex items-center">
                    <MdOutlinePlace className="mr-2" />
                    Celebrity Convention Hall
                  </span>
                  <h3 className="text-black font-bold text-3xl">
                    Roufian HSC-24 Rag Day
                  </h3>
                </div>
                <div className="flex-2">
                  <div className="bg-white rounded-lg p-5 text-center">
                    <p className="text-black text-sm">Apr.</p>
                    <p className="text-purple-600 text-3xl">20</p>
                    <p className="text-black text-sm">10:00 am</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-12">
                <button className="btn btn-primary">See Ticket</button>
                <button className="btn bg-white text-black">
                  20 <span className="text-sm">seat left</span>
                </button>
                <button>See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
