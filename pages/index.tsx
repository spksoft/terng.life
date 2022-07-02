import type { NextPage } from 'next'
import Header from '@/components/Header'

const Home: NextPage = () => {
  const menu = [
    { name: "Technology", href: "#" },
    { name: "Culture", href: "#" },
    { name: "Life style", href: "#" },
    { name: "About me", href: "#" },
  ]
  return (
    <Header title="TERNG.LIFE" menu={menu} />
  )
}

export default Home
