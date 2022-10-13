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

import './Tablelist.css'

const TableList = () => {
  const [user, setUser] = useState([]);

  const displayOders = async () => {
    axios.get("http://localhost:5000/api/user/displaylist").then((res) => {
     
      const { data } = res;

      setUser(data);
    });
  };

  useEffect(() => {
    displayOders();
  }, []);

  
  return (
    <>
    <Container sx={{
        marginTop:"5rem"
    }}>
    <Box>
    <Typography variant="h3" mb={3}>
        User Orders
    </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell >Name</TableCell>
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
                  <TableCell align="left">{item.user_id.firstName}</TableCell>
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
