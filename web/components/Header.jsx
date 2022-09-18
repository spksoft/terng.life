import SearchBox from "@/components/common/SearchBox";
import Button from "@/components/common/Button";

function Header() {
  return (
    <div className="flex h-20 bg-primary-content justify-center items-center shadow-xl">
      <div className="flex flex-ro items-center justify-between w-screen max-w-5xl">
        <h1 className="text-primary font-extrabold text-xl">TERNG.LIFE</h1>
        <SearchBox />
        <div className="flex space-x-2">
          <Button>Log in</Button>
          <Button primary>Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
