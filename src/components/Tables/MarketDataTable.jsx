// material-ui
import { Button } from "@mui/material";
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
import {
  DeleteOutlined,
  EditOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// icons

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const icons = {
    del: <DeleteOutlined />,
    edit: <EditOutlined />,
    detail: <AlignLeftOutlined />,
  };

  const columns = [
    { id: "id_market", label: "ID", minWidth: 35 },
    { id: "name", label: "Nome", minWidth: 170 },
    { id: "geo", label: "Geolocalizações", minWidth: 135 },
    { id: "update", label: "Actualizar", minWidth: 25, align: "center" },
    { id: "delete", label: "Delete", minWidth: 25, align: "center" },
    { id: "detail", label: "Detalhes", minWidth: 25, align: "center" },
  ];

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/market/find/all")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
        setRows([]);
      });
  }, []);

  const setData = (row) => {
    let { id_market, name, geo } = row;

    localStorage.setItem("ID", id_market);
    localStorage.setItem("Name", name);
    localStorage.setItem("Geo", geo);
  };

  const deleteMarket = (row) => {
    const { id_market } = row;

    axios
      .get(`http://localhost:8080/market/delete/${id_market}`)
      .then((response) => {
        alert(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                      if (
                        column.id === "delete" ||
                        column.id === "update" ||
                        column.id === "detail"
                      ) {
                        if (column.id === "delete") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <button
                                onClick={() => {
                                  deleteMarket(row);
                                }}
                              >
                                {icons.del}
                              </button>
                            </TableCell>
                          );
                        }
                        if (column.id === "update") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button onClick={() => setData(row)}>
                                <Link to={"update"}>{icons.edit}</Link>
                              </Button>
                            </TableCell>
                          );
                        }
                        if (column.id === "detail") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button onClick={() => setData(row)}>
                                <Link to={`detail/${row.id_market}`}>
                                  {icons.detail}
                                </Link>
                              </Button>
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
