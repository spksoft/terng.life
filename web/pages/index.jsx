import Page from "@/components/layout/Page";
import FlexContainer from "@/components/common/FlexContainer";
import PostCard from "@/components/PostCard";
import Content from "@/components/common/Content";

export default function Home() {
  return (
    <Page>
      <FlexContainer>
        <Content className="w-full">
          <PostCard />
        </Content>
      </FlexContainer>
    </Page>
  );
}
