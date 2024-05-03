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
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// icons

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const icons = { del: <DeleteOutlined />, edit: <EditOutlined /> };

  const columns = [
    { id: "id_user", label: "ID", minWidth: 35 },
    { id: "username", label: "Username", minWidth: 135 },
    { id: "first_name", label: "First\u00a0Name", minWidth: 135 },
    { id: "last_name", label: "Last\u00a0Name", minWidth: 135 },
    { id: "email", label: "Email", minWidth: 135 },
    {
      id: "number_phone",
      label: "Number\u00a0Phone",
      minWidth: 75,
      align: "right",
    },
    {
      id: "perfil",
      label: "Perfil",
      minWidth: 75,
      align: "right",
    },
    { id: "update", label: "Update", minWidth: 25, align: "center" },
    { id: "delete", label: "Delete", minWidth: 25, align: "center" },
  ];

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/user/find/all")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
        setRows([]);
      });
  }, []);

  const setData = (row) => {
    let {
      id_user,
      username,
      email,
      number_phone,
      first_name,
      last_name,
      perfil,
    } = row;

    localStorage.setItem("ID", id_user);
    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Number Phone", number_phone);
    localStorage.setItem("First Name", first_name);
    localStorage.setItem("Last Name", last_name);
    localStorage.setItem("Perfil", perfil);
  };

  const deleteUser = (row) => {
    const { id_user } = row;

    axios
      .get(`http://localhost:8080/user/delete/${id_user}`)
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
                      if (column.id === "delete" || column.id === "update") {
                        if (column.id === "delete") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                onClick={() => {
                                  deleteUser(row);
                                }}
                              >
                                {icons.del}
                              </Button>
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                onClick={() => {
                                  setData(row);
                                }}
                              >
                                <Link to="update">{icons.edit}</Link>
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
