import React from "react";
import { NameInput } from "../../components/NameInput";
import { Heading, SubHeading } from "../../components";

export class StartView extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-2xl my-3 text-red-700 font-semibold">
          Love Calculator Prank
        </h1>
        <Heading label="Want to know who He/She really likes? " />
        <div className="mt-2">
          <SubHeading label="Trick them into telling you" />
          <NameInput onUserSaved={this.props.onUserSaved} />
        </div>
        <div className="my-4 mx-2 md:mx-5 text-gray-700">
          <div className="bullets">
            <ol
              className="text-left list-disc text-base font-semibold list-outside"
              style={{ listStylePosition: "inside" }}
            >
              <li>Enter Your Name and click create link button.</li>
              <li>
                Share your Link via Whatsapp /Facebook or Anywhere else with
                your Friends, Families, Co-Workers.
              </li>
              <li>
                Tell them it's a Real love calculator, When they open Link it
                looks like Real love Calculator Website.
              </li>
              <li>
                Once Your Friend Enter Crush's Name to Calculate Love, we will
                share them with you.
              </li>
            </ol>
          </div>
        </div>
        <div class="content text-left ">
          <p class="text-left">
            Would you like to know who your friends really like/love? Trick them
            into telling you the truth. Love calculator prank website will help
            you to find out who he/she really likes, Just you need to create a
            link &amp; share it with your friends.
          </p>
          <p class="mt-2">
            They will though it is a real love calculator by which they can
            calculate the percentage of love, so they will enter the name of
            their love &amp; you can easily access that name from the
            scoreboard.
          </p>
          <h3 class="h3 text-center my-3">How to use love calculator prank?</h3>
          <p>
            It is very simple to use that website by doing some easy steps which
            are given blow
          </p>
          <ul class="list-group my-2">
            <li className="list-group-item">
              Open our official website love.evenjust.com
            </li>
            <li className="list-group-item">
              Enter your name &amp; click on create button.
            </li>
            <li className="list-group-item">
              After that, you will the fake love calculator link. Just copy that
              link & share it with your friends on any social media platform.
            </li>
            <li className="list-group-item">
              Your buddy will click on the link He/She will enter their crush
              name on the fake love calculator.
            </li>
            <li className="list-group-item">
              You will get their crush name from scoreboard.
            </li>
          </ul>
          <h4 class="h4 text-center">
            FAQs for Love calculator prank website.
          </h4>
          <p class="font-bold my-2">Q) This website is safe to use?</p>
          <p>
            Yes, all of your data is safe with us. No one can access your data.
          </p>
          <p class="font-bold my-2">Q) Is it legal?</p>
          <p>
            Yes, this website is made for fun only, We only provide you a
            platform where you can prank your friends at your own risk.
          </p>
          <p class="font-bold my-2">Q) Who can see your result?</p>
          <p>
            The result will only be accessible to you, and no one else will be
            able to see it.
          </p>
          <p class="font-bold my-2">
            Q) Is there any limitation to using this website?
          </p>
          <p>No, you can use the love calculator link as much as you want.</p>
        </div>
      </>
    );
  }
}
