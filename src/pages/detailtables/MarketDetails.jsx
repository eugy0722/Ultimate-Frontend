import React from "react";
import axios from "axios";

// Assets
import { PlusOutlined } from "@ant-design/icons";

// mui-material
import { Button, Grid, Typography, FormHelperText } from "@mui/material";

import { useForm } from "react-hook-form";

// import project
import DataTable from "../../components/Tables/MarketDataTableRelations";
import Modal from "../../components/Modal/MarketRelation/Modal";

const MarketDetails = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const infoMarket = {
    id: localStorage.getItem("ID"),
    market: localStorage.getItem("Name"),
  };

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:8080/marketsectors/register`, data)
      .then(() => {
        alert(JSON.stringify({ message: "Savo com Sucesso" }, null, 2));
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          alert(
            JSON.stringify(
              { "message de erro": "Sector não encontrado" },
              null,
              2
            )
          );
        }
        if (error.message === "Request failed with status code 409") {
          alert(
            JSON.stringify({ "message de erro": "Conflicto de Dados" }, null, 2)
          );
        }
      });
  };

  return (
    <Grid
      container
      rowSpacing={4.5}
      columnSpacing={2.75}
      sx={{ paddingRight: 5, paddingLeft: 5 }}
    >
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: 2.25, ml: -3 }}>
        <Typography variant="h5">
          Detalhes do Mercado {infoMarket.market}
        </Typography>
      </Grid>
      <Grid sx={{ width: "100%", textAlign: "right" }}>
        <Button
          sx={{ background: "#b8e0e3" }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined style={{ fontSize: "20px" }} />
        </Button>
      </Grid>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="flex justify-center px-1 bg-white rounded-md max-w-80"
      >
        <div className="flex justify-center items-center m-3 p-3">
          <form
            className="flex flex-col gap-3 pl-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label
                htmlFor="id_market"
                className="after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700"
              >
                Mercado
              </label>
              <input
                name="id_market"
                id="id_market"
                value={infoMarket.id}
                {...register("id_market")}
                placeholder="Nome do Mercado"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="id_sector"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700"
              >
                Sector
              </label>
              <input
                type="number"
                name="id_sector"
                id="id_sector"
                {...register("id_sector", {
                  required: true,
                })}
                aria-invalid={errors.id_sector ? "true" : "false"}
                placeholder="ID do Sector"
              />
              <FormHelperText error id="helper-text-name-market">
                {errors.name?.type === "required" && (
                  <p role="alert">Um nome é requerido</p>
                )}
              </FormHelperText>
            </div>
            <div className="text-right p-8">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-sky-500 hover:bg-sky-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Grid>
        <DataTable idMarket={infoMarket.id} />
      </Grid>
    </Grid>
  );
};

export default MarketDetails;
