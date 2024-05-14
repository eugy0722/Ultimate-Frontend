import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import useUserStore from "../../zustand/store";
import { InfoProduct } from "../../zustand/searchProduct";

const Jobs = () => {
  const { search } = useUserStore();
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if (search) {
      setRows(search);
    }
  }, [search]);

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {rows.map(
          ({
            id_relation,
            businessname,
            businesstype,
            businessdescription,
            price,
            username,
            number_phone,
            email,
            first_name,
          }) => {
            return (
              <div
                key={id_relation}
                className="group group/item singleJob w-[100%] p-[20px] bg-emerald-400 rounded [10px] shadow-lg
        shadow-greyIsh-400/70 hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[24px] font-bold text-textColor group-hover:text-black">
                    Descrição do producto: {businessdescription}
                  </h1>
                </span>
                <p className="text-[18px] text-black mt-[20px]">
                  {businessname}
                </p>

                <h6 className="text-[#070606] text-[16px]">
                  {price || "---"} Kz
                </h6>
                <h6 className="text-[#070606] text-[16px] mb-4">
                  {businesstype}
                </h6>

                <div className="company border-t-2 flex gap-4 text-[18px] ">
                  {/* <img src={"image"} alt="Company Logo" className="w-[10%]" /> */}
                  <span className="py-[1rem] block group-hover:text-black">
                    Mercador: {username || first_name}
                  </span>
                  <p className="text-black py-[1rem]">
                    Número de Telefone: {number_phone}{" "}
                  </p>
                  <p className="text-black py-[1rem]">Email: {email}</p>
                </div>
                <Button
                  onClick={() => {
                    InfoProduct(id_relation);
                  }}
                  className="w-full bg-emerald-900 border-2 border-white text-2xl text-center text-white"
                >
                  <Link to={"product"}>Mais Informações</Link>
                </Button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
