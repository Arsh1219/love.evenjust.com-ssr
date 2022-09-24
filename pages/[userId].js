import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "../context/state";
import { PostCrush } from "../components/PostCrush";
import SEO from "../components/SEO";

const UserId = () => {
  const router = useRouter();
  const { userId: userIdFromUrl } = router.query;
  const { userId } = useUserContext();

  useEffect(() => {
    if (
      userId !== undefined &&
      userIdFromUrl !== undefined &&
      userId === userIdFromUrl
    ) {
      //   console.log(userId, userIdFromUrl);
      router.push("/");
    }
  }, [userIdFromUrl, userId, router]);

  return (
    <>
      {userId !== userIdFromUrl && (
        <>
          <SEO
            title="Astrology Love Calculator"
            description="Know love percentage between you and your partner"
          />
          <PostCrush requestorId={userIdFromUrl} />
        </>
      )}
    </>
  );
};

export default UserId;
