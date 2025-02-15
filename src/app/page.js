"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
export default function Home() {
  const [message, setMessage] = useState("");
  const socket = io("http://localhost:5001");
  const handleSubmition = () => {
    socket.send(message);
  };
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    return () => socket.disconnect();
  }, []);
  return (
    <div className=" bg-slate-700 h-screen w-screen flex gap-5 items-center justify-center flex-col">
      <h1 className=" font-bold text-white">Welcome to Convo!</h1>

      <form
        className="flex  gap-2 h-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmition();
        }}
      >
        <input
          type="text"
          placeholder="Your Message!"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="input input-bordered w-full max-w-xs h-full px-2 rounded  outline-none border-2 border-[rgba(0,0,0,0.40)]"
        />
        <button
          className=" bg-slate-900 text-white  px-3 rounded h-full border-2 border-[rgba(0,0,0,0.40)] "
          onClick={handleSubmition}
        >
          send
        </button>
      </form>
    </div>
  );
}
