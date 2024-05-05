// imported icons from ant icons ==>
import { SearchOutlined, ShopOutlined } from "@ant-design/icons";

// third party
import { useForm } from "react-hook-form";

// import project
import {
  searchProduct,
  searchSimilarProduct,
} from "../../zustand/searchProduct";

const Search = () => {
  const { register, handleSubmit } = useForm();

  const handleSearch = (data) => {
    if (data.search.length < 4) searchSimilarProduct(data);
    else {
      const isNull = searchProduct(data);
      if (isNull) searchSimilarProduct(data);
    }
  };

  return (
    <div className="searchDiv grid gap-10 bg-gray-800 rounded-[10px] p-[3rem]">
      <form action="" onSubmit={handleSubmit(handleSearch)}>
        <div
          className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px]
        bg-white p-5 shadow-greyIsh-700"
        >
          <div className="flex w-96 gap-2 items-center">
            <SearchOutlined className="text-[25px] icon" />
            <input
              id="search"
              type="text"
              name="search"
              {...register("search")}
              className="bg-transparent text-emerald-400 focus:outline-none w-[100%]"
              placeholder="Pesquise pelo Producto ou Serviço..."
            />
            {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/> */}
          </div>

          <div className="flex gap-2 items-center">
            <ShopOutlined className="text-[25px] icon" />
            <select
              type="text"
              className="bg-transparent text-emerald-400 focus:outline-none w-[100%]"
              placeholder="Pesquese Neste Mercado..."
            >
              <option value="">Kongoleses</option>
              <option value="">Kikolo</option>
              <option value="">Sao Paulo</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-emerald-400 h-full p-5 px-10 rounded-[10px] cursor-pointer hover:bg-emerald-950"
          >
            Pesquise
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Ordernar por:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Nome do producto</option>
            <option value="">Tipo do producto</option>
          </select>
        </div>
        <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
