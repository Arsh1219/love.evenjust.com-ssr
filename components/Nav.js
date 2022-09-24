import Link from "next/link";
import React from "react";
import { Logout } from "./Logout";
import { useUserContext } from "../context/state";

export const Nav = () => {
  const { userId } = useUserContext();

  return (
    <div
      className={`flex flex-row items-center w-screen ${
        userId ? "justify-between" : "justify-center"
      } px-4 nav text-white  bg-red-600`}
    >
      <div>
        <Link href="/">
          <img alt="even just" src="/cooo4.svg" className="my-2 h-8" />
        </Link>
      </div>
      <div className="justify-self-end">{userId && <Logout />}</div>
    </div>
  );
};

const FriendshipIcon = () => (
  <span className="px-2 md:px-5 text-xl md:text-2xl">
    <img
      className="w-8 md:w-16"
      alt="Love Calculator prank"
      src="https://lovecalczone.com/images/devil7.png"
    />
  </span>
);
