import Page from "@/components/layout/Page";
import FlexContainer from "@/components/common/FlexContainer";
import TagSidebar from "@/components/TagSidebar";
import PostCard from "@/components/PostCard";
import Content from "@/components/common/Content";

export default function Home() {
  return (
    <Page>
      <FlexContainer>
        <Content className="flex">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <TagSidebar />
            </div>
            <div className="col-span-3">
              <div className="flex flex-col space-y-4">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
              </div>
            </div>
          </div>
        </Content>
      </FlexContainer>
    </Page>
  );
}
