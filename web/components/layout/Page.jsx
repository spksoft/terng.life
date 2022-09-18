import Header from "@/components/Header"

function Page({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <div>Footer</div>
    </div>
  )
}

export default Page;