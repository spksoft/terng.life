import React from 'react'
import glamorous from 'glamorous'

const PageContainer = glamorous.div(tw('flex flex-wrap h-screen'))
const LeftContainer = glamorous.section(tw('w-full sm:w-full md:w-1/2 lg:w-3/7 self-center text-center '))
const RightContainer = glamorous.section(tw('w-full sm:w-full md:w-1/2 lg:w-4/7 flex self-center justify-center md:justify-start mb-1'))
const ContentContainer = glamorous.section(tw('flex flex-col w-4\/5 justify-center overflow-y-scroll max-h-screen'))
const Content = glamorous.p(tw('h-full'))

export default () => (
  <PageContainer>
    <LeftContainer>
      <h1>Sippakorn Raksakiart</h1>
    </LeftContainer>
    <RightContainer>
      <ContentContainer style = {{ 'maxHeight': '500px' }}>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          risus nunc, ultrices tincidunt finibus quis, cursus et eros. Curabitur
          rutrum, felis at fringilla venenatis, felis lacus posuere mauris, vitae
          tincidunt elit est ac ante. Phasellus sit amet odio tempus urna maximus
          finibus. Vestibulum aliquam nibh dignissim orci condimentum elementum.
          Ut ante nisl, scelerisque eget fermentum nec, luctus vel diam.
          Etiam sed feugiat arcu, et dignissim diam. Integer eros sapien,
          dictum a scelerisque ut, vestibulum sed ante. Nunc eleifend arcu libero,
          vel semper odio dignissim eu. Etiam vel imperdiet nisi. Nullam congue
          fringilla cursus. Nullam commodo fermentum elit eget interdum.
          Fusce consequat molestie turpis et porta. Praesent ligula massa,
          tincidunt in tempus eget, fermentum non massa. Nunc aliquam quam vitae
          orci pellentesque rutrum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Pellentesque euismod quam dolor,
          sed suscipit massa blandit eget. Nam a accumsan arcu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          risus nunc, ultrices tincidunt finibus quis, cursus et eros. Curabitur
          rutrum, felis at fringilla venenatis, felis lacus posuere mauris, vitae
          tincidunt elit est ac ante. Phasellus sit amet odio tempus urna maximus
          finibus. Vestibulum aliquam nibh dignissim orci condimentum elementum.
          Ut ante nisl, scelerisque eget fermentum nec, luctus vel diam.
          Etiam sed feugiat arcu, et dignissim diam. Integer eros sapien,
          dictum a scelerisque ut, vestibulum sed ante. Nunc eleifend arcu libero,
          vel semper odio dignissim eu. Etiam vel imperdiet nisi. Nullam congue
          fringilla cursus. Nullam commodo fermentum elit eget interdum.
          Fusce consequat molestie turpis et porta. Praesent ligula massa,
          tincidunt in tempus eget, fermentum non massa. Nunc aliquam quam vitae
          orci pellentesque rutrum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Pellentesque euismod quam dolor,
          sed suscipit massa blandit eget. Nam a accumsan arcu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          risus nunc, ultrices tincidunt finibus quis, cursus et eros. Curabitur
          rutrum, felis at fringilla venenatis, felis lacus posuere mauris, vitae
          tincidunt elit est ac ante. Phasellus sit amet odio tempus urna maximus
          finibus. Vestibulum aliquam nibh dignissim orci condimentum elementum.
          Ut ante nisl, scelerisque eget fermentum nec, luctus vel diam.
          Etiam sed feugiat arcu, et dignissim diam. Integer eros sapien,
          dictum a scelerisque ut, vestibulum sed ante. Nunc eleifend arcu libero,
          vel semper odio dignissim eu. Etiam vel imperdiet nisi. Nullam congue
          fringilla cursus. Nullam commodo fermentum elit eget interdum.
          Fusce consequat molestie turpis et porta. Praesent ligula massa,
          tincidunt in tempus eget, fermentum non massa. Nunc aliquam quam vitae
          orci pellentesque rutrum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Pellentesque euismod quam dolor,
          sed suscipit massa blandit eget. Nam a accumsan arcu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          risus nunc, ultrices tincidunt finibus quis, cursus et eros. Curabitur
          rutrum, felis at fringilla venenatis, felis lacus posuere mauris, vitae
          tincidunt elit est ac ante. Phasellus sit amet odio tempus urna maximus
          finibus. Vestibulum aliquam nibh dignissim orci condimentum elementum.
          Ut ante nisl, scelerisque eget fermentum nec, luctus vel diam.
          Etiam sed feugiat arcu, et dignissim diam. Integer eros sapien,
          dictum a scelerisque ut, vestibulum sed ante. Nunc eleifend arcu libero,
          vel semper odio dignissim eu. Etiam vel imperdiet nisi. Nullam congue
          fringilla cursus. Nullam commodo fermentum elit eget interdum.
          Fusce consequat molestie turpis et porta. Praesent ligula massa,
          tincidunt in tempus eget, fermentum non massa. Nunc aliquam quam vitae
          orci pellentesque rutrum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Pellentesque euismod quam dolor,
          sed suscipit massa blandit eget. Nam a accumsan arcu.
        </Content>
      </ContentContainer>
    </RightContainer>
  </PageContainer>
)
