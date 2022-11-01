import SimpleCard from "@/components/common/SimpleCard";

function TagSidebar({ tagList = ["#programming", "#bigdata"], title = "Trending" }) {
  return (
    <SimpleCard>
      <h3 className="font-semibold">{title}</h3>
      <div className="flex flex-col space-y-2">
        {tagList.map((tag, i) => (
          <div key={`tag-${i}`} className="badge hover:bg-primary hover:cursor-pointer">
            {tag}
          </div>
        ))}
      </div>
    </SimpleCard>
  );
}

export default TagSidebar;