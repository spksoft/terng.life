import React from 'react'

type MenuItem = {
  name: string
  href: string
}

type Props = {
  title: string
  menu: MenuItem[]
}

const Header: React.FC<Props> = ({ title, menu }) => {
  return (
    <header>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="justify-center items-center flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 my-4 sm:text-5xl">{title}</h1>
          <nav className="hidden space-x-8 text-sm font-medium my-4 md:flex">
            {
              menu.map((item, index) => {
                return (
                  <a key={`menu_item_${index}`} href={item.href} className="text-gray-400 hover:text-gray-700 font-semibold text-lg">{item.name}</a>
                )
              })
            }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header