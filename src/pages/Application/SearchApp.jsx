import Search from "../../components/SearchApp/Search";
import Jobs from "../../components/SearchApp/Jobs";
import Footer from "../../components/SearchApp/Footer.jsx";

const SearchApp = () => {
  return (
    <div className="w-full bg-gray-900">
      <div className="w-[85%] m-auto bg-gray-900 text-black">
        <Search />
        <Jobs />
        <Footer />
      </div>
    </div>
  );
};

export default SearchApp;
