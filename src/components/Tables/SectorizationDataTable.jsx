import axios from "axios";
import { Link } from "react-router-dom";

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

// import project
import useUserStore from "../../zustand/store";
import { backendRoutes } from "../../utils/routes";

// icons
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const icons = { del: <DeleteOutlined />, edit: <EditOutlined /> };

  const { user } = useUserStore();

  const columns = [
    { id: "id_relation", label: "ID", minWidth: 45 },
    { id: "marketname", label: "Nome do Market", minWidth: 175 },
    { id: "sectorname", label: "Nome do Sector", minWidth: 175 },
    { id: "marketlatitude", label: "Latitude", minWidth: 75 },
    { id: "marketlogitude", label: "Logitude", minWidth: 75 },
    { id: "delete", label: "Delete", minWidth: 25, align: "center" },
  ];

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:8080${backendRoutes.FindAllRelations}${user.id_user}`
      )
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
        setRows([]);
      });
  }, [Paper]);

  const setData = () => {
    // let { id_sector, name } = row;
    // localStorage.setItem("ID", id_sector);
    // localStorage.setItem("Name", name);
  };

  const deleteRelation = (row) => {
    const { id_relation } = row;

    axios
      .get(
        `http://localhost:8080${backendRoutes.DeleteSectorization}${id_relation}`
      )
      .then((response) => {
        alert(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") alert("Falha na requisicao");
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
                      if (column.id === "delete" || column.id === "update") {
                        if (column.id === "delete") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <button
                                onClick={() => {
                                  deleteRelation(row);
                                }}
                              >
                                {icons.del}
                              </button>
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button onClick={() => setData(row)}>
                                <Link to={"update"}>{icons.edit}</Link>
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
