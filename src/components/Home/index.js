import React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'

const PageContainer = glamorous.div(tw('flex flex-wrap h-screen'))
const ContentContainer = glamorous.section(tw('flex flex-col justify-center items-center overflow-y-scroll max-h-screen'))
const Content = glamorous.div(tw('h-full'))
const B = glamorous.b({
  fontWeight: 'bold',
})
const Button = glamorous.button(tw('bg-white hover:bg-gray text-black font-bold py-2 px-4 rounded'))

const buttonGroupCSS = css({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px 0px 0px 0px',
})

const iconButton = css({
  flexDirection: 'row',
  padding: '10px 0px 0px 0px',
})

const paddingLeftRight = css({
  padding: '0px 3px 0px 3px',
})

export default () => (
  <PageContainer>
    <ContentContainer style={{ margin: '0px auto 0px auto' }}>
      <Content>
        <div>
          <ContentContainer>
            <h1>Sippakorn Raksakiart</h1>
          </ContentContainer>
          <div style={{ margin: '0px auto 0px auto', padding: '0px 50px 0px 50px', maxWidth: '500px', minWidth: '100px' }}>
          I am a web developer, software engineer, and project manager currently living in Bangkok, Thailand. My interests range from photography to technology. I am also interested in entrepreneurship, reading, and movies.You can click the button 'Hire me if you can' to hire me. If you’d like to get in touch, feel free to say hello through any of the social links below.
          </div>
          <div {...buttonGroupCSS}>
            <Button style={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.linkedin.com/in/sippakorn-raksakiart-4b5365b9/') }}>Hire me if you can</Button>
          </div>
          <div {...buttonGroupCSS} {...iconButton}>
            <div {...paddingLeftRight}>
              <a href="https://github.com/spksoft" target="_blank"><img width={16} height={16} src="img/github-logo.png" /></a>
            </div>
            <div {...paddingLeftRight}>
              <a href="https://medium.com/@sippakornraksakiart" target="_blank"><img width={16} height={16} src="img/medium-size.png" /></a>
            </div>
            <div {...paddingLeftRight}>
              <a href="mailto:spkrsk.37@gmail.com"><img width={16} height={16} src="img/opened-email-envelope.png" /></a>
            </div>
          </div>
        </div>
      </Content>
    </ContentContainer>
  </PageContainer>
)
