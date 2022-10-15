import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import "./Tablelist.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const TableList = () => {
  const [user, setUser] = useState([]);
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setStatus(event.target.value);
  };

  const displayOders = async () => {
    axios.get("http://localhost:5000/api/user/displaylist").then((res) => {
      const { data } = res;
      if (!status) {
        setUser(data);
      } else {
        const filterData = data.filter((item) => item.status === status);
        setUser(filterData);
      }
    });
  };

  useEffect(() => {
    displayOders();
  }, [status]);

  return (
    <>
      <Container
        sx={{
          marginTop: "5rem",
        }}
      >
        <Box sx={{ minWidth: 50 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Delivered"}>Delivered</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography variant="h3" mb={3}>
            User Orders
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Purchase date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.map((item) => {
                  return (
                    <TableRow
                      key={item._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        {item.user_id.firstName}
                      </TableCell>
                      <TableCell align="left">{item.user_id.email}</TableCell>
                      <TableCell align="left">{item.productName}</TableCell>
                      <TableCell align="left">{item.status}</TableCell>
                      <TableCell align="left">{item.createdAt}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default TableList;
