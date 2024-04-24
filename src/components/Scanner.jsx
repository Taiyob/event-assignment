import { BsQrCode } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { PiNavigationArrowFill } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";

const Scanner = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-bold text-6xl">Automated QR Scanner</h2>
        <p className="text-purple-500 text-3xl w-2/5 text-center mt-5">
          Scan & Verify The Attendees Directly By Our QR Scanning Solution.
        </p>
      </div>

      <div className="flex mt-8 items-center justify-evenly w-full">
        <div className="flex-grow p-10 mx-6 my-12 rounded-md dark:bg-gray-800 dark:text-gray-100 bg-[#3B47F033]">
          <div className="">
            <PiNavigationArrowFill className="rounded-full bg-white h-10 w-10 p-2"></PiNavigationArrowFill>
          </div>
          <div className="">
            <p className="text-xl font-semibold leading-snug">One Click</p>
            <p>QR Verification System</p>
          </div>
        </div>

        <div className="flex-grow  p-10 mx-6 my-12 rounded-md dark:bg-gray-800 dark:text-gray-100 bg-[#3B47F033]">
          <div className="">
            <BsQrCode className="rounded-full bg-white h-10 w-10 p-2"></BsQrCode>
          </div>
          <div className="">
            <p className="text-xl font-semibold leading-snug">One Time</p>
            <p>QR Code</p>
          </div>
        </div>

        <div className="flex-grow p-10 mx-6 my-12 rounded-md dark:bg-gray-800 dark:text-gray-100 bg-[#3B47F033]">
          <div className="">
            <SiTicktick className="rounded-full bg-white h-10 w-10 p-2"></SiTicktick>
          </div>
          <div className="">
            <p className="text-xl font-semibold leading-snug">Easy Access</p>
            <p>Lorem Access</p>
          </div>
        </div>

        <div className="flex-grow p-10 mx-6 my-12 rounded-md dark:bg-gray-800 dark:text-gray-100 bg-[#3B47F033]">
          <div className="">
            <IoMailSharp className="rounded-full bg-white h-10 w-10 p-2"></IoMailSharp>
          </div>
          <div className="">
            <p className="text-xl font-semibold leading-snug">Mail</p>
            <p>Send Bulk Personalized Mail With Attachments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
