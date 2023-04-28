import { SearchIcon } from "../../icons/Icons";

const SearchBar = () => {
    return (
        <div
            className="flex items-center bg-gray-100 space-x-4 rounded-full px-8 py-3 my-3 text-gray-dark
            focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base sticky top-0"
        >
            <SearchIcon className="w-5 h-5 focus:text-primary-base" />
            <input
                type="text"
                placeholder="Search Twitter"
                className="bg-transparent placeholder-gray-dark focus:outline-none w-full text-sm"
            />
        </div>
    );
};

export default SearchBar;
