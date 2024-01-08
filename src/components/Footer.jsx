import React, { useState, useEffect } from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <>
      <footer className="fixed flex bottom-0 footer items-center p-4 justify-between text-2xl text-neutral-content border-t-2 border-[#424242] bg-black backdrop-blur-md">
        <span className="flex justify-center align-items-center gap-2">
          <BsHouseDoorFill className="mt-1" />
          <p>&nbsp;24-1C</p>
        </span>
        <span>
          <p>Device: NLV8HDOCKKREEV6T</p>
        </span>
        <span className="flex justify-center align-items-center gap-2">
          <LuClock3 className="mt-1" />
          <p>&nbsp;{formattedTime}</p>
        </span>
      </footer>
    </>
  );
}
