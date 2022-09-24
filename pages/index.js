import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { AddInTop, AddInBottom } from "../components/Adds";
import { Banner } from "../components/Banner";
import { StartView } from "../components/views/StartView";
import { SharableView } from "../components/views/SharableView";
import { Timeline } from "../components/Timeline";
import { useUserContext } from "../context/state";
import SEO from "../components/SEO";

export default function Home() {
  const { userId, setUserId } = useUserContext();

  if (userId) {
    return (
      <>
        <SEO />
        <AddInTop />
        {/* <Banner href="https://song.cooo.me/select?ref=secret" /> */}

        <div className="w-full max-w-3xl mx-auto px-3 p-2 mt-3 bg-white border border-gray-600 rounded-xlg">
          <SharableView userId={userId} />
        </div>
        <div className="mt-4">
          <Timeline />
        </div>
        <AddInBottom />
      </>
    );
  }

  return (
    <>
      <div className="text-center bg-gray-200 h-full min-h-screen">
        <SEO />
        <AddInTop />
        {/* <Banner href="https://song.cooo.me/select?ref=secret" /> */}

        <div className="w-full max-w-3xl mx-auto px-3 p-2 mt-3 bg-white border border-gray-600 rounded-xlg">
          <StartView onUserSaved={() => setUserId("1234")} />
        </div>
        <AddInBottom />
      </div>
    </>
  );
}
