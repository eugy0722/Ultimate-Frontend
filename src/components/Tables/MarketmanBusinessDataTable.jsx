// material-ui
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
// assets
import { DeleteOutlined } from "@ant-design/icons";

// icons

// Import Project
import { backendRoutes } from "../../utils/routes";
import useUserStore from "../../zustand/store";

// eslint-disable-next-line react/prop-types
export default function DataTable({ id_sector }) {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { user } = useUserStore();
  const icons = { del: <DeleteOutlined /> };

  const columns = [
    { id: "id_relation", label: "ID", minWidth: 35 },
    { id: "businessname", label: "Nome do producto", minWidth: 175 },
    { id: "businesstype", label: "Tipo do producto", minWidth: 75 },
    { id: "businessprice", label: "Preço do producto", minWidth: 45 },
    { id: "sectorname", label: "Nome do Sector", minWidth: 175 },
    { id: "businessdescription", label: "Descrição", minWidth: 105 },
    { id: "delete", label: "Delete", minWidth: 25, align: "center" },
  ];

  React.useEffect(() => {
    if (id_sector) {
      axios
        .get(
          `http://localhost:8080${backendRoutes.FindAllMarketmanBusiness}${user.id_user}/${id_sector}`
        )
        .then((res) => {
          setRows(res.data);
        })
        .catch((error) => {
          setRows([]);
          console.log(error);
        });
    }
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteBusiness = (row) => {
    const { id_relation } = row;

    axios
      .get(
        `http://localhost:8080${backendRoutes.DeleteMarketmanBusiness}${id_relation}`
      )
      .then((response) => {
        alert(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "delete") {
                        if (column.id === "delete") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <button
                                onClick={() => {
                                  deleteBusiness(row);
                                }}
                              >
                                {icons.del}
                              </button>
                            </TableCell>
                          );
                        }
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
