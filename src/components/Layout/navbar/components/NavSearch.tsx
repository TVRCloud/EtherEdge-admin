import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  onSearch: (value: string) => void;
};
const NavSearch = ({ onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-main-bg px-[20px] py-[8px] rounded-full flex items-center gap-2">
      <IoSearchOutline />
      <input
        type="text"
        className="bg-transparent outline-none w-full"
        placeholder="Search"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onSearch(searchValue);
          }
        }}
      />
    </div>
  );
};

export default NavSearch;
