import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SubHeading, Heading } from ".";
import { postFriendCrush } from "./apis";
import { AddInTop, AddInBottom } from "./Adds";

export const PostCrush = (props) => {
  const [requestorName, setRequestorName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (processed) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [processed]);

  const onClick = async () => {
    setProcessing(true);
    if (!requestorName || !crushName || processing) {
      setProcessing(false);
      return;
    }

    postFriendCrush(props?.requestorId, requestorName, crushName).then(
      (name) => {
        setFriendName(name);
        setProcessed(true);
        setProcessing(false);
      }
    );
  };

  if (processed) {
    return (
      <div
        className="w-full h-full p-3 pb-5 overflow-scroll flex flex-col items-center justify-center"
        style={{ background: 'url("https://love.evenjust.com/bg3.jpeg")' }}
      >
        <AddInTop />
        <div className="mt-4">
          <Heading label="You have successfully been FOOLED!" />
        </div>
        <div className="mt-4">
          <Heading label={`Your Name & Crush's Name has been Sent to`} />
        </div>

        <div className="mt-2 text-4xl mx-auto">{friendName}</div>
        <img
          className="bg-cover mx-auto"
          alt="Love Calculator"
          src="/gifbb702.gif"
        />
        <div className="mt-4">
          <Heading label="To Create your own prank" />
          <div className="max-w-xl mt-4 mx-auto">
            <img
              className="w-40 mx-auto"
              src="/59060c290cbeef0acff9a659.png"
              alt="Click"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        <AddInBottom />
      </div>
    );
  }

  return (
    <div
      className="w-full h-full p-3 pb-5 overflow-scroll"
      style={{ background: 'url("https://love.cooo.me/bg3.jpeg")' }}
    >
      <AddInTop />
      <div className="md:max-w-2xl mx-auto">
        <img
          className="m-auto bg-cover"
          alt="Love Calculator"
          src="/heartlogo.png"
        />
      </div>
      <SubHeading label="Enter Your Name and Your Crush/BF/GF Name!" />

      <div className="mt-4 max-w-lg px-3 mx-auto">
        <input
          type="text"
          name="fname"
          className="form-control mt-1 focus:outline-0 focus:shadow-outline h-10 border-2 border-gray-500 rounded-lg px-2 block w-full appearance-none leading-normal"
          placeholder="Enter Your Name"
          value={requestorName}
          onChange={(e) => setRequestorName(e.target.value)}
        />
        <input
          type="text"
          name="fname"
          className="form-control mt-3 focus:outline-0 focus:shadow-outline h-10 border-2 border-gray-500 rounded-lg px-2 block w-full appearance-none leading-normal"
          placeholder="Enter Your Crush Name"
          value={crushName}
          onChange={(e) => setCrushName(e.target.value)}
        />
        <div className="w-64 mt-4 mx-auto">
          {processing ? (
            <div className="w-16 mx-auto">
              <img alt="processing" src="/cd514331234507.564a1d2324e4e.gif" />
            </div>
          ) : null}
          <img onClick={onClick} className="" alt="empty" src="/14.png" />
        </div>
      </div>
      <div className="mt-2 max-w-4xl mx-auto">
        We all know that a name can tell a lot about a person. Names are not
        randomly chosen: they all have a meaning.
        <div className="mt-3">
          Doctor Love knew this so he made another great invention just for the
          lonely you! The Love Calculator is an affective way to get an
          impression of what the chances are on a relationship between two
          people.
        </div>
        <div className="mt-3">
          Enter Your and your Crush's Full name and click Calculate Button.
        </div>
      </div>
      <AddInBottom />
    </div>
  );
};
