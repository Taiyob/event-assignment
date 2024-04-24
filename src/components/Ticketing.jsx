import { BsFillShieldLockFill } from "react-icons/bs";

const Ticketing = () => {
  return (
    <div
      className="mt-28 h-screen"
      style={{
        backgroundImage: "url('src/assets/images/ticket.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-bold text-6xl">Simplify Ticketing</h2>
        <p className="text-purple-500 text-3xl w-1/3 text-center mt-5">
          First Ever Unique QR Ticketing Platform For Event Registration &
          Booking
        </p>
        <div className="pt-10">
          <button className="flex items-center btn btn-primary">
            <BsFillShieldLockFill className="text-2xl"></BsFillShieldLockFill>
            Secure Payment With
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticketing;
