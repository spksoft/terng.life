import Image from "next/image";
import * as dayjs from "dayjs";
import SimpleCard from "@/components/common/SimpleCard";

function ProfileDisplayer({ image, postTime = dayjs(), name }) {
  const displayTime = dayjs().calendar(dayjs(postTime));
  return (
    <div className="flex flex-row space-x-2">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <Image
            width={40}
            height={40}
            src={image || "https://placeimg.com/192/192/people"}
            alt="poster profile"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">{name || "spksoft"}</span>
        <span className="font-extralight text-xs">{displayTime}</span>
      </div>
    </div>
  );
}

function HashtagsList({ hashtags = ["#programming", "#bigdata"] }) {
  return (
    <div className="flex flex-row space-x-2">
      {hashtags.map((hashtag, i) => (
        <div key={`hashtags-${i}`} class="badge">
          {hashtag}
        </div>
      ))}
    </div>
  );
}

function PostCard({ title }) {
  return (
    <SimpleCard>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-extrabold">
          {title ||
            "Yesterday I received my 100th rejection letter. What am I doing wrong?"}
        </h2>
        <HashtagsList />
        <ProfileDisplayer />
      </div>
    </SimpleCard>
  );
}

export default PostCard;
