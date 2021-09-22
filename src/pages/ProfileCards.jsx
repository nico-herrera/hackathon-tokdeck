import React, { useState, useEffect } from "react";
import Card from "../components/profiles/Card";

const ProfileCards = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfileInfomation();
  }, []);

  const loadProfileInfomation = () => {
    setAccounts([
      {
        userInfo: {
          user: {
            id: 6569595380449903000,
            shortId: 0,
            uniqueId: "lilyachty",
            nickname: "lilyachty",
            avatarLarger:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_1080x1080.jpeg?x-expires=1623697200&x-signature=BAtL%2Brwp%2BqOm%2FeB5CiHu96jJMKk%3D",
            avatarMedium:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_720x720.jpeg?x-expires=1623697200&x-signature=Zq891nNHwNtHQHoVGgWPK9kYZpM%3D",
            avatarThumb:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_100x100.jpeg?x-expires=1623697200&x-signature=eipislASGJ1C8OP4KIJM39nW5nc%3D",
            signature: "i have all of the answers inside of my head",
            createTime: 1548906000,
            verified: true,
            secUid:
              "MS4wLjABAAAAsHntXC3s0AvxcecggxsoVa4eAiT8OVafVZ4OQXxy-9htpnUi0sOYSr0kGGD1Loud",
            ftc: true,
            relation: 0,
            openFavorite: true,
            bioLink: {},
            commentSetting: 0,
            duetSetting: 0,
            stitchSetting: 0,
            privateAccount: true,
            secret: true,
            isADVirtual: true,
            roomId: null,
          },
          stats: {
            followerCount: 7000000,
            followingCount: 51,
            heart: 156500000,
            heartCount: 156500000,
            videoCount: 177,
            diggCount: 0,
          },
          itemList: [],
        },
      },
      {
        userInfo: {
          user: {
            id: 6569595380449903000,
            shortId: 0,
            uniqueId: "lilyachty",
            nickname: "lilyachty",
            avatarLarger:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_1080x1080.jpeg?x-expires=1623697200&x-signature=BAtL%2Brwp%2BqOm%2FeB5CiHu96jJMKk%3D",
            avatarMedium:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_720x720.jpeg?x-expires=1623697200&x-signature=Zq891nNHwNtHQHoVGgWPK9kYZpM%3D",
            avatarThumb:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_100x100.jpeg?x-expires=1623697200&x-signature=eipislASGJ1C8OP4KIJM39nW5nc%3D",
            signature: "i have all of the answers inside of my head",
            createTime: 1548906000,
            verified: true,
            secUid:
              "MS4wLjABAAAAsHntXC3s0AvxcecggxsoVa4eAiT8OVafVZ4OQXxy-9htpnUi0sOYSr0kGGD1Loud",
            ftc: true,
            relation: 0,
            openFavorite: true,
            bioLink: {},
            commentSetting: 0,
            duetSetting: 0,
            stitchSetting: 0,
            privateAccount: true,
            secret: true,
            isADVirtual: true,
            roomId: null,
          },
          stats: {
            followerCount: 7000000,
            followingCount: 51,
            heart: 156500000,
            heartCount: 156500000,
            videoCount: 177,
            diggCount: 0,
          },
          itemList: [],
        },
      },
      {
        userInfo: {
          user: {
            id: 6569595380449903000,
            shortId: 0,
            uniqueId: "lilyachty",
            nickname: "lilyachty",
            avatarLarger:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_1080x1080.jpeg?x-expires=1623697200&x-signature=BAtL%2Brwp%2BqOm%2FeB5CiHu96jJMKk%3D",
            avatarMedium:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_720x720.jpeg?x-expires=1623697200&x-signature=Zq891nNHwNtHQHoVGgWPK9kYZpM%3D",
            avatarThumb:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658838867803142~c5_100x100.jpeg?x-expires=1623697200&x-signature=eipislASGJ1C8OP4KIJM39nW5nc%3D",
            signature: "i have all of the answers inside of my head",
            createTime: 1548906000,
            verified: true,
            secUid:
              "MS4wLjABAAAAsHntXC3s0AvxcecggxsoVa4eAiT8OVafVZ4OQXxy-9htpnUi0sOYSr0kGGD1Loud",
            ftc: true,
            relation: 0,
            openFavorite: true,
            bioLink: {},
            commentSetting: 0,
            duetSetting: 0,
            stitchSetting: 0,
            privateAccount: true,
            secret: true,
            isADVirtual: true,
            roomId: null,
          },
          stats: {
            followerCount: 7000000,
            followingCount: 51,
            heart: 156500000,
            heartCount: 156500000,
            videoCount: 177,
            diggCount: 0,
          },
          itemList: [],
        },
      },
    ]);
    setLoading(false);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div className="h-screen w-full flex flex-wrap flex-row justify-start items-center">
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <Card key={account.id} infomation={account} />
          ))
        ) : (
          <p>No accounts please login</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCards;
