import React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'

const PageContainer = glamorous.div(tw('flex flex-wrap h-screen'))
const LeftContainer = glamorous.section(tw('w-full sm:w-full md:w-1/2 lg:w-3/7 self-center text-center '))
const RightContainer = glamorous.section(tw('w-full sm:w-full md:w-1/2 lg:w-4/7 flex self-center justify-center md:justify-start mb-1'))
const ContentContainer = glamorous.section(tw('flex flex-col w-4\/5 justify-center overflow-y-scroll max-h-screen'))
const Content = glamorous.p(tw('h-full'))
const B = glamorous.b({
  fontWeight: 'bold',
})
const Button = glamorous.button(tw('bg-white hover:bg-gray text-black font-bold py-2 px-4 rounded'))

const buttonGroupCSS = css({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 0px 0px 0px',
})

export default () => (
  <PageContainer>
    <LeftContainer>
      <h1>Sippakorn Raksakiart</h1>
    </LeftContainer>
    <RightContainer>
      <ContentContainer style={{ maxHeight: '500px' }}>
        <Content>
          <div>
            Hello, I'm <B>Terng</B>. Now, I'm a <B>Software Architect at True corporation (Thailand)</B>. I was born in Phitsanulok town and <B>I love to coding since I'm 13 years old</B>
            when I was 15 year old my program <B>'sPkAutorunkiller' was publish in COMPUTER.TODAY magazine</B> and also I'm a owner of <B>sPkSecurityGen Pullo ChoiceChecker terng.life BikerApp</B> too.
            I graduated from <B>Computer Engineering</B> department from <B>King Mongkut's University of Technology Thonburi</B>. For my work experince, <B>I'm Software Enginner at BlueBik, Contractor software enginner at HBOT.io, Full Stack Developer at FIN$TREET and Software Architect at True corporation</B>
          </div>
          <div {...buttonGroupCSS}>
            <Button onClick={() => { window.open('https://www.linkedin.com/in/sippakorn-raksakiart-4b5365b9/') }}>Hire me if you can</Button>
          </div>
        </Content>
      </ContentContainer>
    </RightContainer>
  </PageContainer>
)
