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
import { backendRoutes } from "../../utils/routes";
import useInfoStore from "../../zustand/store";

// icons

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const icons = { del: <DeleteOutlined /> };

  const { sector } = useInfoStore();

  console.log(sector);

  const columns = [
    { id: "id_business", label: "ID", minWidth: 35 },
    { id: "name", label: "Nome do producto", minWidth: 175 },
    { id: "type", label: "Tipo do producto", minWidth: 75 },
    { id: "price", label: "Preço do producto", minWidth: 45 },
    { id: "description", label: "Descrição", minWidth: 105 },
  ];

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:8080${backendRoutes.FindBusinessesAboutSector}${sector.id_sector}`
      )
      .then((response) => {
        console.log(response.data);
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
        setRows([]);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteBusiness = (row) => {
    const { id_business } = row;

    axios
      .get(`http://localhost:8080/business/delete/${id_business}`)
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
