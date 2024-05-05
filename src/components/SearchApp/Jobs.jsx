import React from "react";

import useUserStore from "../../zustand/store";
import { Link } from "react-router-dom";

const Jobs = () => {
  const { search } = useUserStore();
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if (search) setRows(search);

    console.log(rows);
  }, [search]);

  const setData = (row) => {
    localStorage.setItem("Product found", row);
  };

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {rows.map(
          ({
            id_relation,
            businessname,
            businessdescription,
            username,
            businesstype,
            price,
          }) => {
            return (
              <div
                key={id_relation}
                className="group group/item singleJob w-[100%] p-[20px] bg-emerald-400 rounded [10px] shadow-lg
        shadow-greyIsh-400/70 hover:shadow-lg "
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[26px] font-bold text-textColor group-hover:text-black">
                    {businessname}
                  </h1>
                </span>

                <h6 className="text-[#070606] text-[16px]">
                  {price || "---"} Kz
                </h6>
                <h6 className="text-[#070606] text-[16px]">{businesstype}</h6>
                <p className="text-[18px] text-[#959595] pt-[20px]  border-t-[2px] mt-[20px] group-hover:text-black">
                  {businessdescription}
                </p>

                <div className="company flex items-center gap-2">
                  <img src={"image"} alt="Company Logo" className="w-[10%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-black">
                    {username}
                  </span>
                </div>

                <button
                  className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
           hover:bg-emerald-950 group-hover/item:text-textColor group-hover:text-black"
                  onClick={() =>
                    setData({
                      id_relation,
                      businessname,
                      businessdescription,
                      username,
                      businesstype,
                      price,
                    })
                  }
                >
                  <Link to={"product"}>Ver mais</Link>
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
