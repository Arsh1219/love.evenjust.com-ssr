import React from "react";
import {
  getUserId,
  getSecretKey,
  getUserName,
  saveUserId,
  saveSecretKey,
  setUserName,
} from "../cookies";
import { getRequestorId, getCookies } from "../utils";
import { StartView } from "./StartView";
import { SharableView } from "./SharableView";
import { PostCrush } from "../PostCrush";
import { Timeline } from "../Timeline";
import { Banner } from "../Banner";
import { AddInTop, AddInBottom } from "../Adds";
import { Heading } from "..";

import { Nav } from "../Nav";

export class ViewHandler extends React.Component {
  constructor(props) {
    super(props);

    this.onUserSaved = this.onUserSaved.bind(this);

    this.state = {
      userId: getUserId(),
      secretKey: getSecretKey(),
      userName: getUserName(),
      requestorId: getRequestorId(),
    };
  }

  onUserSaved() {
    this.updateState();
  }

  updateCookies() {
    const cook = getCookies();
    console.log(cook);

    if (cook.status == true) {
      saveUserId(cook.userId);
      saveSecretKey(cook.secretKey);
      setUserName(cook.userName);

      return true;
    }

    return false;
  }

  refreshPage() {
    window.location.replace(`${window.location.origin}/`);
  }

  updateState() {
    this.setState({
      userId: getUserId(),
      secretKey: getSecretKey(),
      userName: getUserName(),
      requestorId: getRequestorId(),
    });
  }

  render() {
    if (this.updateCookies() == true) {
      this.refreshPage();
    }

    if (this.state.requestorId) {
      if (this.state.requestorId === this.state.userId) {
        return <ShowShareView userId={this.state.userId} />;
      } else {
        return <PostCrush requestorId={this.state.requestorId} />;
      }
    } else {
      if (this.state.userId) {
        return <ShowShareView userId={this.state.userId} />;
      } else {
        return (
          <>
            <UpperView />
            <div className="w-full max-w-3xl mx-auto px-3 p-2 mt-3 bg-white border border-gray-600 rounded-xlg">
              <StartView onUserSaved={this.onUserSaved} />
            </div>
            <AddInBottom />
          </>
        );
      }
    }
  }
}

const ShowShareView = ({ userId }) => {
  return (
    <>
      <UpperView />
      <div className="w-full max-w-3xl mx-auto px-3 p-2 mt-3 bg-white border border-gray-600 rounded-xlg">
        <SharableView userId={userId} />
      </div>
      <div className="mt-4">
        <Timeline />
      </div>
      <AddInBottom />
    </>
  );
};

const UpperView = () => {
  return (
    <>
      <Nav label="" />
      <AddInTop />
      <Banner href="https://song.cooo.me/select?ref=secret" />
    </>
  );
};
